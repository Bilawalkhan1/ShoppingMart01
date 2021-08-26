import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { WatchesComponent } from './watches.component';

const routes: Routes = [
  { path: '', component: WatchesComponent,
  children:[
    { path: '', component: ListComponent}
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WatchesRoutingModule { }
