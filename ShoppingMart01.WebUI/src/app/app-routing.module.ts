import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { UserControlComponent } from './components/user-control/user-control.component';
import { AuthGuardService } from './Services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupFormComponent},
  {path: 'cart', loadChildren:()=> import('./components/cart/cart.module').then(x=> x.CartModule)},
  { path: "product/:name" , component: ProductComponent },
  { path: "addproduct" , component: AddproductsComponent },
  { path: "getcategory/:category/:subcategory" , component: CategoryComponent },
  { path: "User", component: UserControlComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
 
  exports: [RouterModule]
})
export class AppRoutingModule { }
