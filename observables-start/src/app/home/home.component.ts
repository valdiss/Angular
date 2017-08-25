import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription} from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numbersObsSubscription: Subscription;
  timeoutObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000).map((number:number)=>{
      return number*2;
    });
    this.numbersObsSubscription = myNumbers.subscribe(
      (number:number)=>{
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 4000);
      setTimeout(() => {
        // observer.error('this is an error!');
        observer.complete();
      }, 5000);
      setTimeout(() => {
        observer.next('third package');
      }, 6000);
    });

    this.timeoutObsSubscription = myObservable.subscribe(
      (message: string) => {console.log(message);},
      (error: string) => {console.log(error);},
      ()=>{ console.log('completed');}
    );
  }

  ngOnDestroy(){
    this.numbersObsSubscription.unsubscribe();
    this.timeoutObsSubscription.unsubscribe();
  }

}
