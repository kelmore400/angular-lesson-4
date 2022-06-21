import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenComponent, WomenComponent, KidsComponent } from './clothes';
import { ToysComponent, SchoolComponent, FoodComponent } from './kids-goods';

const routes: Routes = [
  {path: 'kids-clothes', component: KidsComponent},
  {path: 'men-clothes', component: MenComponent},
  {path: 'women-clothes', component: WomenComponent},
  {path: 'kids-food', component: FoodComponent},
  {path: 'kids-toys', component: ToysComponent},
  {path: 'kids-school', component: SchoolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
