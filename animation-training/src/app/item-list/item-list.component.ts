import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ItemService } from "../item.service";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  items = [];

  constructor(private itemService:ItemService) { }

  ngOnInit() {
    this.itemService.onItemsChange.subscribe((items)=>{this.items= items});
    this.items = this.itemService.getItems();
  }

  onNewItem(f:NgForm){
    this.itemService.Add(f.value);
    f.resetForm();
  }

}
