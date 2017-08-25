import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() secondEmitted = new EventEmitter<{time:number}>();
  times:number= 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  onStart(){
    this.interval = window.setInterval(()=>{
      this.times ++;
      this.secondEmitted.emit({time:this.times});
    }, 1000);
  }

  onStop(){
    window.clearInterval(this.interval);
  }

}
