import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FurnitureRoutingModule } from './furniture-routing.module';
import { FurnitureComponent } from './furniture.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductBrowsingModule } from 'src/app/product-browsing/product-browsing.module';


@NgModule({
  declarations: [
    FurnitureComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    FurnitureRoutingModule,
    SharedModule,
    ProductBrowsingModule
  ]
})
export class FurnitureModule { }
