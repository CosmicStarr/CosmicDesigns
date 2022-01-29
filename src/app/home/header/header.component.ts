import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IShoppingCart, IShoppingCartItems, IShoppingCartTotals } from 'src/app/models/shoppingCart';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ShoppingCart$:Observable<IShoppingCart>
  ShoppingCartTotal$:Observable<IShoppingCartTotals>
  showMenu:boolean = false
  constructor(private ShoppingService:ShoppingCartService) { }

  ngOnInit(): void {
    this.ShoppingCart$ = this.ShoppingService.ShoppingCart$
    this.ShoppingCartTotal$ = this.ShoppingService.ShoppingCartTotal$
  }

  removeItems(item:IShoppingCartItems){
    this.ShoppingService.removeItem(item)
  }
  toggleMenu(){
    this.showMenu = !this.showMenu
  }
}
