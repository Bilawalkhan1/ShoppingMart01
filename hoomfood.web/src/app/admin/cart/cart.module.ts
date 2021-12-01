import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { NgxModelModule } from 'ngx-model';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    NgxModelModule,
    SlickCarouselModule
  ]
})
export class CartModule { }
 