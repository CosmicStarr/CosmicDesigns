import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingcartRoutingModule } from './shoppingcart-routing.module';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { HomeModule } from '../home/home.module';
import { OrdersummaryComponent } from './ordersummary/ordersummary.component';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    OrdersummaryComponent
  ],
  imports: [
    CommonModule,
    ShoppingcartRoutingModule,
    HomeModule
  ]
})
export class ShoppingcartModule { }
