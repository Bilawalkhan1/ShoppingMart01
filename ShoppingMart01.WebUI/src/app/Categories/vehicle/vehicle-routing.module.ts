import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { VehicleComponent } from './vehicle.component';

const routes: Routes = [
  { path: '', component: VehicleComponent,
  children:[
    { path: '', component: ListComponent},
    { path: 'detail/:id', component: DetailComponent}
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }
