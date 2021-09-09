import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CategoriesListViewComponent } from './components/categories-list-view/categories-list-view.component';
import { IconsModule, NavbarModule } from 'angular-bootstrap-md';
import { ProductsViewComponent } from './components/products-view/products-view.component';
import { ClickOutsideDirectiveDirective } from './Directive/click-outside-directive.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterComponent } from './components/filter/filter.component';
import { FiltermobileComponent } from './components/filtermobile/filtermobile.component';


@NgModule({
  declarations: [
    CategoriesListViewComponent,
    ProductsViewComponent,
    ClickOutsideDirectiveDirective,
    FilterComponent,
    FiltermobileComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    NavbarModule,
    IconsModule ,
    NgbModule,
    
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule,
    CategoriesListViewComponent,
    NavbarModule,
    MatIconModule,
    NgbModule,
    IconsModule,
    ClickOutsideDirectiveDirective,
    FilterComponent,
  ]
})
export class SharedModule { }
