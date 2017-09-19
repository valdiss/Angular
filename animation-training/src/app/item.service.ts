import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

@Injectable()
export class ItemService {

  onItemsChange = new Subject<any>();

  items = [
    {content:'hello'},
    {content:'world'},
    {content:'!!!!!'}
  ];

  constructor() {}

  Add(item){
    this.items.push(item);
    this.onItemsChange.next(this.items.slice());
  }

  getItems(){
    return this.items;
  }

  removeItem(id:number){
    this.items.splice(id,1);
    this.onItemsChange.next(this.items.slice());
  }

}
