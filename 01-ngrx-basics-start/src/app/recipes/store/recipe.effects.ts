import { Injectable } from "@angular/core";
import { Effect, Actions } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/withLatestFrom';
import { Store } from "@ngrx/store";

import * as RecipeActions from 'app/recipes/store/recipe.actions';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';
import { HttpClient } from "@angular/common/http";
import { Recipe } from "app/recipes/recipe.model";
import * as fromRecipe from "app/recipes/store/recipe.reducers";
import { HttpRequest } from "@angular/common/http";


@Injectable()
export class RecipeEffects {
  @Effect() recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .switchMap((action:RecipeActions.fetchRecipes)=>{
      return this.httpClient.get<Recipe[]>('https://courseproject-fde89.firebaseio.com/recipes.json', {
        observe: 'body',
        responseType: 'json'
      })
    })
    .map(
      (recipes) => {
        for (let recipe of recipes) {
          if (!recipe['ingredients']) {
            recipe['ingredients'] = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        };
      }
    );

  @Effect({dispatch:false}) recipeStore = this.actions$
    .ofType(RecipeActions.STORE_RECIPES)
    .withLatestFrom(this.store.select('recipes'))
    .switchMap(([action, state])=>{
      const req = new HttpRequest('PUT', 'https://courseproject-fde89.firebaseio.com/recipes.json', state.recipes, {reportProgress: true});
      return this.httpClient.request(req);
    })


  constructor(private actions$:Actions, private httpClient:HttpClient, private store:Store<fromRecipe.FeatureState>){}

}
