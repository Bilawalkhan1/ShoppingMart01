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
  slideConfig2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: false
  };
  constructor(private productService: ProductService, private router:Router) {
  }
  ngOnInit(): void {
    this.productService.getProduct().subscribe(response => {
      this.data = response
      console.log('response', this.data)
    })
  }
  public covertPhotoUrl(photoUrl) {
    return `data:image/jpeg;base64,${photoUrl}`
  }
  public sendProductDetails(product: any) {   
    this.productService.sendProduct(product);
    this.router.navigate(['ProductBrowsing/product',product.Product_Name])
  }
}