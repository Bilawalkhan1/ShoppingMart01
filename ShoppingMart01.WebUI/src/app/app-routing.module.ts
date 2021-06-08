import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { UserControlComponent } from './components/user-control/user-control.component';
import { AuthGuardService } from './Services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupFormComponent},
  { path: "cart", component: CartComponent },
  { path: "product/:name" , component: ProductComponent },
  { path: "usercontrol", component: UserControlComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
