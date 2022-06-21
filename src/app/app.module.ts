import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesModule } from './clothes/clothes.module';
import { KidsGoodsModule } from './kids-goods/kids-goods.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClothesModule,
    KidsGoodsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
