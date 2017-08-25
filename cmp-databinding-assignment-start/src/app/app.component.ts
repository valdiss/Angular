import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  seconds:number;
  oddSeconds = [];
  evenSeconds = [];

  secondEmitted (secondsPassed : {time :number}){
    this.seconds= secondsPassed.time;
    if(this.seconds%2 == 0){
      this.evenSeconds.push(this.seconds);
    }else {
      this.oddSeconds.push(this.seconds);
    }

  }
}
