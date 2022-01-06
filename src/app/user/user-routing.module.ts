import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EatagainComponent } from './eatagain/eatagain.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'orders',component:UserOrdersComponent},
  {path:'eat-again',component:EatagainComponent},
  {path:'settings',component:SettingsComponent},
  {path:'profile',component:UserAccountComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
