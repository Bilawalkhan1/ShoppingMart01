import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { ProductBrowsingRoutingModule } from './product-browsing-routing.module';
import { ProductBrowsingComponent } from './product-browsing.component';
import { CategoryComponent } from './category/category.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRelatedCarouselComponent } from './product-related-carousel/product-related-carousel.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductBrowsingComponent,
    ProductComponent,
    CategoryComponent,
    ProductRelatedCarouselComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ProductBrowsingRoutingModule,
    SlickCarouselModule,
    SharedModule
  ],
  exports:[
    ProductListComponent
  ]
})
export class ProductBrowsingModule { }
