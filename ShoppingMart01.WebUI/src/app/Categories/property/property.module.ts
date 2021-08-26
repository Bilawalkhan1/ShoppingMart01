import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyRoutingModule } from './property-routing.module';
import { PropertyComponent } from './property.component';
import { ListComponent } from './list/list.component';
import { ProductBrowsingModule } from 'src/app/product-browsing/product-browsing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PropertyComponent,
    ListComponent,
  ],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    SharedModule,
    ProductBrowsingModule
  ]
})
export class PropertyModule { }
