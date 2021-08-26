import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElectronicRoutingModule } from './electronic-routing.module';
import { ElectronicComponent } from './electronic.component';
import { ListComponent } from './list/list.component';
import { ProductBrowsingModule } from 'src/app/product-browsing/product-browsing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ElectronicComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    ElectronicRoutingModule,
    SharedModule,
    ProductBrowsingModule
  ]
})
export class ElectronicModule { }
