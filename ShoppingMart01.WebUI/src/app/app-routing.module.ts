import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './Index/chat/chat.component';
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

  { path: 'automotive/:id', loadChildren: () => import('./Categories/vehicle/vehicle.module').then(m => m.VehicleModule) },

  { path: 'automotive/:id/:subc/:sid', loadChildren: () => import('./Categories/vehicle/vehicle.module').then(m => m.VehicleModule) },

  { path: 'furniture/:id', loadChildren: () => import('./Categories/furniture/furniture.module').then(m => m.FurnitureModule) },

  { path: 'furniture/:id/:subc/:sid', loadChildren: () => import('./Categories/furniture/furniture.module').then(m => m.FurnitureModule) },

  { path: 'electronic/:id', loadChildren: () => import('./Categories/electronic/electronic.module').then(m => m.ElectronicModule) },

  { path: 'electronic/:id/:subc/:sid', loadChildren: () => import('./Categories/electronic/electronic.module').then(m => m.ElectronicModule) },

  { path: 'property/:id', loadChildren: () => import('./Categories/property/property.module').then(m => m.PropertyModule) },

  { path: 'property/:id/:subc/:sid', loadChildren: () => import('./Categories/property/property.module').then(m => m.PropertyModule) },

  { path: 'watches/:id', loadChildren: () => import('./Categories/watches/watches.module').then(m => m.WatchesModule) },
  { path: 'watches/:id/:subc/:sid', loadChildren: () => import('./Categories/watches/watches.module').then(m => m.WatchesModule) },

  { path: 'jewelry/:id', loadChildren: () => import('./Categories/jewelry/jewelry.module').then(m => m.JewelryModule) },
  { path: 'jewelry/:id/:subc/:sid', loadChildren: () => import('./Categories/watches/watches.module').then(m => m.WatchesModule) },

  { path: 'grossery/:id', loadChildren: () => import('./Categories/grossery/grossery.module').then(m => m.GrosseryModule) },
  { path: 'grossery/:id/:subc/:sid', loadChildren: () => import('./Categories/watches/watches.module').then(m => m.WatchesModule) },

  { path: 'sports/:id', loadChildren: () => import('./Categories/sports/sports.module').then(m => m.SportsModule) },
  { path: 'sports/:id/:subc/:sid', loadChildren: () => import('./Categories/watches/watches.module').then(m => m.WatchesModule) },

  { path: 'chat', component: ChatComponent },
  
  {
    path: '**', redirectTo: '/', pathMatch: 'full'
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
