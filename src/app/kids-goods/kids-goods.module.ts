import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToysComponent, SchoolComponent, FoodComponent } from './';

@NgModule({
  declarations: [
    ToysComponent,
    FoodComponent,
    SchoolComponent
  ],
  imports: [
    CommonModule
  ]
})
export class KidsGoodsModule { }
