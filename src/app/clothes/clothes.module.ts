import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenComponent, WomenComponent, KidsComponent } from './';
import { DressesComponent } from './women/dresses/dresses.component';
import { JeansComponent } from './women/jeans/jeans.component';
import { SweatshirtsComponent } from './women/sweatshirts/sweatshirts.component';
import { ShortsComponent } from './men/shorts/shorts.component';

@NgModule({
  declarations: [
    MenComponent,
    WomenComponent,
    KidsComponent,
    DressesComponent,
    JeansComponent,
    SweatshirtsComponent,
    ShortsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClothesModule { }
