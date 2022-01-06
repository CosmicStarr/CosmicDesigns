import { Component, OnDestroy, OnInit } from '@angular/core';
import { EatagainComponent } from '../eatagain/eatagain.component';
import { UserOrdersComponent } from '../user-orders/user-orders.component';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss']
})
export class UserAccountComponent implements OnInit {
  // try to use viewchild to change element style
  select = '#a2b400'
  userOptions = UserOrdersComponent;
  constructor() { }
  
  ngOnInit(): void {
    this.assignComponent(this.userOptions)
  }

  assignComponent(component){
    if(component === 'eats'){
      this.userOptions = EatagainComponent
    }else{
      this.userOptions = UserOrdersComponent
    }
  }
}
