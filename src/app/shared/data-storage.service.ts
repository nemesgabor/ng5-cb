import { Injectable } from "@angular/core";
import { Http,Response } from "@angular/http";
import { RecipeService } from "../recipes/recipes.service";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/add/operator/map';
import { AuthService } from "../auth/auth.service";
@Injectable()
export class DataStorageService {
  fbURL = "https://ng-recipeb.firebaseio.com/recipes.json"
  constructor(
    private http:Http,
    private recipeService: RecipeService,
    private authService: AuthService
  ){}

  storeRecipes(){
    const token = this.authService.getToken();
    return this.http.put(this.fbURL+'?auth='+token, this.recipeService.getRecipes());
  }

  getRecipes(){
    const token = this.authService.getToken();
    this.http.get(this.fbURL+'?auth='+token)
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
