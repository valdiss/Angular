import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username : string;

  allowButton(){
    if(this.username){
      return false;
    }
    else{
      return true;
    }
  }

  onButtonClick(){
    this.username = '';
  }
}
