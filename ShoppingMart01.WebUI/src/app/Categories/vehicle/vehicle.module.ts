import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehicleRoutingModule } from './vehicle-routing.module';
import { VehicleComponent } from './vehicle.component';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductBrowsingModule } from 'src/app/product-browsing/product-browsing.module';


@NgModule({
  declarations: [
    VehicleComponent,
    ListComponent
  ],
  imports: [
  CommonModule,
    VehicleRoutingModule,
    SharedModule,
    ProductBrowsingModule
  ]
})
export class VehicleModule { }
