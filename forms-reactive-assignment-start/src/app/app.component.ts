import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  projectStatuses=['Stable','Critical','Finished'];
  submitForm : FormGroup;
  forbiddenProjectName = 'test';
  defaultStatus = 'Stable';

  ngOnInit(){
    this.submitForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required], this.projectNameAsyncValidator.bind(this)),
      'email': new FormControl(null, [Validators.email, Validators.required]),
      'projectStatus': new FormControl(this.defaultStatus, Validators.required)
    });
  }

  onSubmit(){
    console.log(this.submitForm.value);
  }

  projectNameValidator(control: FormControl): {[s:string]:boolean}{
    if (control.value === this.forbiddenProjectName) {
        return {'projectNameIsForbidden' : true};
    }
    return null;
  }

  projectNameAsyncValidator(control:FormControl): Promise<any> | Observable<any>{
    const promise= new Promise<any>((resolve,reject)=>{
      setTimeout(()=>{
        if(control.value === this.forbiddenProjectName){
          resolve ({'projectNameIsForbidden' : true});
        } else {
          resolve(null);
        }
      },2000);
    });
    return promise;
  }
}
