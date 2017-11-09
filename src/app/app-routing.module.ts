import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes',pathMatch:'full'},
  {path: 'recipes', component: RecipesComponent, children:[
    { path: '', component:RecipesStartComponent }, // ~/recipes/recipes-start
    { path: 'new', component:RecipeEditComponent }, // ~/recipes/new
    { path: ':id', component:RecipeDetailComponent }, // ~/recipes/id
    { path: ':id/edit', component:RecipeEditComponent }, // ~/recipes/id/edit
  ]}, // ~/recipes
  {path: 'shopping-list', component: ShoppingListComponent}, // ~/shopping-list

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
