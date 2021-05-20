import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductDetailsService } from 'src/app/product-details.service';
import { product } from './../../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  product: product[] =[];
  subscription = new Subscription();

  constructor(private productDetails : ProductDetailsService) {
    this.subscription = this.productDetails.getProduct().subscribe(prod=>{
      if(prod){
        this.product.push(prod);
        console.log(this.product)
      } else{
        this.product=[];
      }
    })
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
