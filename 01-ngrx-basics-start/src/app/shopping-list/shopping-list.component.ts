import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import * as fromApp from "app/store/app.reducers";
import * as ShoppingListActions from "app/shopping-list/store/shopping-list.actions";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ingredients: Ingredient[]}>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
