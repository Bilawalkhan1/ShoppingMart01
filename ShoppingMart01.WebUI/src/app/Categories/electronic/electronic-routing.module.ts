import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ElectronicComponent } from './electronic.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '', component: ElectronicComponent,
    children: [
      { path: '', component: ListComponent },
      { path: 'detail/:id', component: DetailComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicRoutingModule { }
