import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JewelryComponent } from './jewelry.component';

const routes: Routes = [{ path: '', component: JewelryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JewelryRoutingModule { }
