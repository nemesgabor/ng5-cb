import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { RecipeService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/add/operator/map';
@Injectable()
export class DataStorageService {
  fbURL = "https://ng-recipeb.firebaseio.com/recipes.json"
  constructor(private http:Http, private recipeService: RecipeService){}

  storeRecipes(){
    return this.http.put(this.fbURL, this.recipeService.getRecipes());
  }

  getRecipes(){
    this.http.get(this.fbURL)
      .map(
        (response: Response) =>{
          const recipes: Recipe[] = response.json();
          for(let recipe of recipes){
            if(!recipe['ingredients']){
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes:Recipe[]) => {

          this.recipeService.setRecipes(recipes);
        }
      );
  }

}
