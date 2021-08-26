import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FurnitureComponent } from './furniture.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '', component: FurnitureComponent,
    children: [
      { path:'', component: ListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FurnitureRoutingModule { }
