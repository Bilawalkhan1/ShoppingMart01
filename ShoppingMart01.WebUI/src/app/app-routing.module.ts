import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewComponent } from './Index/MainView/MainView.component';

const routes: Routes = [

  {
    path: '', component: MainViewComponent
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

  { path: 'vehicle/:id', loadChildren: () => import('./Categories/vehicle/vehicle.module').then(m => m.VehicleModule) },

  { path: 'vehicle/:id/:subc/:sid', loadChildren: () => import('./Categories/vehicle/vehicle.module').then(m => m.VehicleModule) },

  { path: 'furniture/:id', loadChildren: () => import('./Categories/furniture/furniture.module').then(m => m.FurnitureModule) },

  { path: 'furniture/:id/:subc/:sid', loadChildren: () => import('./Categories/furniture/furniture.module').then(m => m.FurnitureModule) },

  { path: 'electronic/:id', loadChildren: () => import('./Categories/electronic/electronic.module').then(m => m.ElectronicModule) },

  { path: 'electronic/:id/:subc/:sid', loadChildren: () => import('./Categories/electronic/electronic.module').then(m => m.ElectronicModule) },

  { path: 'property/:id', loadChildren: () => import('./Categories/property/property.module').then(m => m.PropertyModule) },
 
  { path: 'property/:id/:subc/:sid', loadChildren: () => import('./Categories/property/property.module').then(m => m.PropertyModule) },
  
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
