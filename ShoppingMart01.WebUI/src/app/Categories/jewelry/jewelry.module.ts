import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JewelryRoutingModule } from './jewelry-routing.module';
import { JewelryComponent } from './jewelry.component';


@NgModule({
  declarations: [
    JewelryComponent
  ],
  imports: [
    CommonModule,
    JewelryRoutingModule
  ]
})
export class JewelryModule { }
