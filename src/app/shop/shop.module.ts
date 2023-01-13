import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { AboutComponent } from './about/about.component';
import { HomeModule } from '../home/home.module';
import { ProductDetailsComponent } from './all-products/product-details/product-details.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RatingModule } from 'ng-starrating';



@NgModule({
  declarations: [
    AllProductsComponent,
    AboutComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    HomeModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    RatingModule
  ]
})
export class ShopModule { }
