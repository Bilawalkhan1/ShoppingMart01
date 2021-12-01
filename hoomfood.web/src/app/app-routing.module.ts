import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './accounts/login/login.component';
import { SignupFormComponent } from './accounts/signup-form/signup-form.component';
import { MainViewComponent } from './Index/MainView/MainView.component';

const routes: Routes = [

  {
    path: '', component: MainViewComponent
  },
  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'account',
    loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule)
  },
  {
    path: 'ProductBrowsing',
    loadChildren: () => import('./product-browsing/product-browsing.module').then(m => m.ProductBrowsingModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./admin/cart/cart.module').then(x => x.CartModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },

  { path: 'furniture/:id', loadChildren: () => import('./Categories/furniture/furniture.module').then(m => m.FurnitureModule) },

  { path: 'furniture/:id/:subc/:sid', loadChildren: () => import('./Categories/furniture/furniture.module').then(m => m.FurnitureModule) },
  
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
