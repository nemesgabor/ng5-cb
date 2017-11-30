import { NgModule } from "@angular/core/";
import { RouterModule,Routes } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { RecipesStartComponent } from "./recipes-start/recipes-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { AuthGuard } from "../auth/auth-guard.service";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";

const recipesRoutes: Routes = [
  {path: '', component: RecipesComponent, children:[
    { path: '', component:RecipesStartComponent }, // ~/recipes/recipes-start
    { path: 'new', component:RecipeEditComponent, canActivate: [AuthGuard] }, // ~/recipes/new
    { path: ':id', component:RecipeDetailComponent }, // ~/recipes/id
    { path: ':id/edit', component:RecipeEditComponent, canActivate: [AuthGuard] }, // ~/recipes/id/edit
  ]}, // ~/recipes
]
@NgModule({
  imports: [RouterModule.forChild(recipesRoutes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule{}
