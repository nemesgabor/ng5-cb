import { NgModule } from '@angular/core';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  //{path: '', redirectTo: '/recipes',pathMatch:'full'},
  {path:'', component:HomeComponent},
  {path:'recipes', loadChildren:'./recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent}, // ~/shopping-list
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
