import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GrosseryRoutingModule } from './grossery-routing.module';
import { GrosseryComponent } from './grossery.component';


@NgModule({
  declarations: [
    GrosseryComponent
  ],
  imports: [
    CommonModule,
    GrosseryRoutingModule
  ]
})
export class GrosseryModule { }
