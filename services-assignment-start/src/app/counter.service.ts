export class CounterService {
  counter = 0;

  updateCounter(){
    this.counter ++;
    console.log(this.counter);
  }
}
