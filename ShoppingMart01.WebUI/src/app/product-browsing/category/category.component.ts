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

  constructor (
    private productService: ProductService,
    private productFilterPropertyS: ProductProperties,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      const sidebarToggle = document.body.querySelector('#sidebarToggle');
      if (sidebarToggle) {
        sidebarToggle.addEventListener('click', event => {
          event.preventDefault();
          document.body.classList.toggle('sb-sidenav-toggled');
        });
      }
    })
  }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category')
    this.subcategory = this.route.snapshot.paramMap.get('subcategory')
    this.getcategorydata()
    console.log(this.category)
    this.ProductFiltersProperty = this.productFilterPropertyS.GetProductFilterProperties()
    console.log(this.ProductFiltersProperty);
  }


  getcategorydata() {
    this.productService.getProdByCategory(this.category)
    .subscribe( products => {
      this.Products = products;
      this.filteredProducts = this.Products.filter(p => p.type === this.subcategory)
    });
  }

  get selectedMobileBrand() {
    return this.ProductFiltersProperty.MobileBrands.filter(opt => opt.Checked)
  }
  get selectedOs() {
    return this.ProductFiltersProperty.MobileOs.filter(opt => opt.Checked)
  }
  get selectedColor() {
    return this.ProductFiltersProperty.Color.filter(opt => opt.Checked)
  }
  get selectedCarBrand() {
    return this.ProductFiltersProperty.CarBrands.filter(opt => opt.Checked)
  }

  OnChange(event) {
    this.FilteredProductList = [];
    for (var i = 0; i < this.selectedMobileBrand.length; i++) {
      var lst = this.ProductFiltersProperty.MobileBrands.filter(x => x.BrandName == this.selectedMobileBrand[i].BrandName);
      for (var j = 0; j < lst.length; j++) {
        this.FilteredProductList.push(lst[j]);
      }
    }
    for (var i = 0; i < this.selectedOs.length; i++) {
      var lst = this.ProductFiltersProperty.MobileOs.filter(x => x.OSName == this.selectedOs[i].OSName);
      for (var j = 0; j < lst.length; j++) {
        this.FilteredProductList.push(lst[j]);
      } 
    }
    for (var i = 0; i < this.selectedOs.length; i++) {
      var lst = this.ProductFiltersProperty.Color.filter(x => x.color == this.selectedOs[i].color);
      for (var j = 0; j < lst.length; j++) {
        this.FilteredProductList.push(lst[j]);
      }
    }
    console.log(this.FilteredProductList)
  }
}