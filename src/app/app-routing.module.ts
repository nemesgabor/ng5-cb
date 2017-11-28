import { SigninComponent } from './auth/signin/signin.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipesStartComponent } from './recipes/recipes-start/recipes-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth-guard.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes',pathMatch:'full'},
  {path: 'recipes', component: RecipesComponent, children:[
    { path: '', component:RecipesStartComponent }, // ~/recipes/recipes-start
    { path: 'new', component:RecipeEditComponent, canActivate: [AuthGuard] }, // ~/recipes/new
    { path: ':id', component:RecipeDetailComponent }, // ~/recipes/id
    { path: ':id/edit', component:RecipeEditComponent, canActivate: [AuthGuard] }, // ~/recipes/id/edit
  ]}, // ~/recipes
  {path: 'shopping-list', component: ShoppingListComponent}, // ~/shopping-list
  {path: 'signup', component: SignupComponent}, // ~/signup
  {path: 'signin', component: SigninComponent} // ~/signin

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
