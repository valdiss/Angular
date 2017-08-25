import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('f') signupform: NgForm;
  defaultQuestion = 'teacher';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username:'',
    email:'',
    secret:'',
    answer:'',
    gender:''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupform.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email: 'test@test.fr'
    //   },
    //   secret:'pet',
    //   questionAnswer:'myCat',
    //   gender:'male'
    // });
    this.signupform.form.patchValue({
      userData:{
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm){
  //   console.log(form.value);
  // }

  onSubmit(){
    this.user.username = this.signupform.value.userData.username;
    this.user.email = this.signupform.value.userData.email;
    this.user.secret = this.signupform.value.secret;
    this.user.answer = this.signupform.value.questionAnswer;
    this.user.gender = this.signupform.value.gender;

    this.signupform.reset();
  }
}
