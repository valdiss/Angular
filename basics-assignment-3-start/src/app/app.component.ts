import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  visible = false;
  clicks = [];
  timesClicked = 0;

  togglePw(){
    this.visible = !this.visible;
    this.timesClicked ++;
    this.clicks.push(this.timesClicked);
  }

  fifthAndUp(click){
    if(click >= 4){
      return 'blue';
    }
  }
}
