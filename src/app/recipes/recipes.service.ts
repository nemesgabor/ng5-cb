import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from '../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe(
      'A test',
      'This is just a dummy test',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Test1',1),
        new Ingredient('Test2',2)
      ]),
    new Recipe('A test2',
      'This is just a dummy test2',
      'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
      [
        new Ingredient('Test12',12),
        new Ingredient('Test22',22)
      ])
  ];

  constructor(private sListService: ShoppingListService){

  }

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.sListService.addIngredients(ingredients);
  }

  getRecipe(index:number){
    return this.recipes[index];
  }
}