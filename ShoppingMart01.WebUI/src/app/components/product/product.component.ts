import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProductDetailsService } from 'src/app/Services/product-details.service';
import { product } from '../../Classes/product';

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
      } else{
        this.product=[]; 
      }
    })
   }
   public covertPhotoUrl(photoUrl){
    return `data:image/jpeg;base64,${photoUrl}`
  }


  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
