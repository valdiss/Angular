import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import * as fromApp from "app/store/app.reducers";
import * as fromAuth from "app/auth/store/auth.reducers";
import * as AuthActions from 'app/auth/store/auth.actions';
import * as RecipeActions from 'app/recipes/store/recipe.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  authState : Observable<fromAuth.State> ;

  constructor(private store:Store<fromApp.AppState>) {
  }

  ngOnInit(){
    this.authState = this.store.select('auth');
  }

  onSaveData() {
    this.store.dispatch(new RecipeActions.storeRecipes());
  }

  onFetchData() {
    this.store.dispatch(new RecipeActions.fetchRecipes());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }
}
