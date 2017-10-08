/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpModule } from "@angular/http";

import { TodoService } from "./todo.service";
import { TodosComponent } from './todos.component';
import { Observable } from "rxjs";
import { fakeAsync } from "@angular/core/testing";
import { tick } from "@angular/core/testing";

//NOTE: I've deliberately excluded this suite from running
// because the test will fail. This is because we have not
// provided the TodoService as a dependency to TodosComponent.
//
// When you get to Lecture 6 (Providing Dependencies), be sure
// to remove "x" from "xdescribe" below.

describe('TodosComponent', () => {
  let component: TodosComponent;
  let fixture: ComponentFixture<TodosComponent>;
  let service: TodoService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ TodosComponent ],
      providers: [TodoService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // xit('should load todos from the server with Observable', ()=>{
  //   let service = TestBed.get(TodoService);
  //   // fixture.debugElement.injector.get(TodoService); only works if provided from the component directly
  //   spyOn(service , 'getTodos').and.returnValue(Observable.from([[1,2,3]]));
  //
  //   fixture.detectChanges();
  //
  //   expect(component.todos.length).toBe(3);
  // });

  it('should load todos from the server with Promise', fakeAsync(()=>{
    let service = TestBed.get(TodoService);
    // fixture.debugElement.injector.get(TodoService); only works if provided from the component directly
    spyOn(service , 'getTodosPromise').and.returnValue(Promise.resolve([1,2,3]));

    fixture.detectChanges();

    tick();
    expect(component.todos.length).toBe(3);
    console.log("expect was called");

    // fixture.whenStable().then(()=>{
    //   console.log("expect was called");
    //   expect(component.todos.length).toBe(3);
    // });
  }));
});
