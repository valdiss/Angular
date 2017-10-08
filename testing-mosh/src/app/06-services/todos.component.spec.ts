import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should set todos property with the items returned from the server', () => {
    let todos = [1,2,3];

    spyOn(service, 'getTodos').and.callFake(()=>{
      return Observable.from([todos]);
    });

    component.ngOnInit();

    // expect(component.todos.length).toBeGreaterThan(0);
    expect(component.todos.length).toBe(3);
    expect(component.todos).toEqual(todos);
  });

  it('should call the add method of service when a new item is added', ()=>{
    let spy = spyOn(service, 'add').and.callFake((todoItem)=>{
      return Observable.empty();
    });

    component.add();

    expect(spy).toHaveBeenCalled();
  });

  it('should add the new todo returned from the server', ()=>{
    let todo = {id:1};
    let spy = spyOn(service, 'add').and.returnValue(Observable.from([todo]));

    component.add();

    expect(component.todos).toContain(todo);
  });

  it('should set message property if error occurred', ()=>{
    let error = 'Error occurred';
    let spy = spyOn(service, 'add').and.returnValue(Observable.throw(error));

    component.add();

    expect(component.message).toBe(error);
  });

  it('should call the server if delete is confirmed', ()=>{
    spyOn(window,'confirm').and.returnValue(true);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(2);

    expect(spy).toHaveBeenCalledWith(2);
  });

  it('should NOT call the server if delete is NOT confirmed', ()=>{
    spyOn(window,'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());

    component.delete(2);

    expect(spy).not.toHaveBeenCalled();
  });
});
