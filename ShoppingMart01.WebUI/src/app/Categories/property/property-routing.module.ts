import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PropertyComponent } from './property.component';

const routes: Routes = [
  {
    path: '', component: PropertyComponent,
    children: [
      { path: '', component: ListComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyRoutingModule { }
