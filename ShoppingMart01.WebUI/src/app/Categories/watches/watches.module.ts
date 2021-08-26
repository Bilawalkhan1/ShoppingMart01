import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WatchesRoutingModule } from './watches-routing.module';
import { WatchesComponent } from './watches.component';
import { ListComponent } from './list/list.component';
import { ProductBrowsingModule } from 'src/app/product-browsing/product-browsing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    WatchesComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    WatchesRoutingModule,
    ProductBrowsingModule,
    SharedModule
  ]
})
export class WatchesModule { }
