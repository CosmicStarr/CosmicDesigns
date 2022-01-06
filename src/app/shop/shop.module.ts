import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { AboutComponent } from './about/about.component';
import { HomeModule } from '../home/home.module';


@NgModule({
  declarations: [
    AllProductsComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    HomeModule
  ]
})
export class ShopModule { }
