import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductDetailsService } from 'src/app/Services/product-details.service';
import { ProductService } from 'src/app/Services/product.service';
import { product } from '../../Classes/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {
  product: product[] = [];
  subscription = new Subscription();
  count: number = 0
  Productcategory: string
  products: product[] = []
  productId: number
  slideConfig2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
  }

  addcount() {
    return this.count += 1
  }
  reducecount() {
    if (this.count > 0) {
      return this.count -= 1
    }
    return this.count
  }

  constructor(private productDetails: ProductDetailsService,
    private productService: ProductService,
    private router: Router) {
    this.subscription = this.productDetails.getProduct().subscribe(prod => {
      if (prod) {
        this.product.push(prod);
        this.Productcategory = prod.category  // category get
        this.productId = prod.Product_id
      } else {
        this.product = [];
      }
    })
  }
  public covertPhotoUrl(photoUrl) {
    return `data:image/jpeg;base64,${photoUrl}`
  }


  ngOnInit(): void {
    this.getRelatedProd(this.Productcategory, this.productId);
  }

  getRelatedProd(prodCategory, prodId) {
    this.subscription = this.productService.getProdByCategory(prodCategory)
      .subscribe(prod => {
        this.products = prod
        this.RemoveElementFromArray(prodId);
      })
  }

  RemoveElementFromArray(key: number) {
    return this.products.forEach((value, index) => {
      if (value.Product_id == key)
        this.products.splice(index, 1);
    });
  }

  buyNow() {
    this.router.navigateByUrl('/login')
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
