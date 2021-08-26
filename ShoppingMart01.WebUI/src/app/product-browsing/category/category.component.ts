import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { product } from 'src/app/Classes/product';
import { ProductService } from 'src/app/shared/models/product.service';
import { ProductProperties } from '../product-properties';
declare var $: any;

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  FilteredProductList = []
  ProductFiltersProperty: any = []
  Products: product[] = [];
  filteredProducts: product[] = [];
  category: any;
  subcategory: any
  data: []
  constructor(private productService: ProductService) {
  }
  ngOnInit(): void {
    this.productService.getProduct().subscribe(response => {
      this.data = response
      console.log('response', this.data)
    })
  }
  
}