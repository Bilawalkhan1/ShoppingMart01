import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SelectcategoryComponent } from './selectcategory/selectcategory.component';
import { UserControlComponent } from './user-control/user-control.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: "addproduct", component: AddproductsComponent },
      { path: "sellproducts", component: SelectcategoryComponent },
      { path: "User", component: UserControlComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
