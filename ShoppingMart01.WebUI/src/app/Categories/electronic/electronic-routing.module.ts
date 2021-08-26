import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicComponent } from './electronic.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '', component: ElectronicComponent,
    children: [
      { path: '', component: ListComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectronicRoutingModule { }
