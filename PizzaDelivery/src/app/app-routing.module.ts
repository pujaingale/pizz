import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderNowComponent } from './order-now/order-now.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [{path:"SignUp",component:SignUpComponent},
{path:"Home",component:HomeComponent},
{path:"OrderNow",component:OrderNowComponent},
{path:"login",component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
