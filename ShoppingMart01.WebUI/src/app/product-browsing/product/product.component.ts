import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductService } from 'src/app/shared/models/product.service';
import { product } from '../../Classes/product';
declare var $: any;

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
    arrows: false
  }
  itemcart: any;

  addcount() {
    return this.count += 1
  }
  reducecount() {
    if (this.count > 0) {
      return this.count -= 1
    }
    return this.count
  }

  constructor(
    private auth: AuthService,
    private productService: ProductService,
    private router: Router) {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.subscription = this.productService.getProduct().subscribe(prod => {
      if (prod) {     
        this.product.push(prod);
        this.Productcategory = prod.subcategoryid  
        this.productId = prod.id
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

  getRelatedProd(Categoryid, prodId) {
    this.subscription = this.productService.getProdByCategory(Categoryid)
      .subscribe(prod => {       
        this.products = prod
        this.RemoveElementFromArray(prodId);
      })
  }

  RemoveElementFromArray(key: number) {
    return this.products.forEach((value:any, index) => {
      if (value.id == key)
        this.products.splice(index, 1);
    });
  }
  public addtocart(category: any) {
    let cartdatanull = localStorage.getItem('localcart');
    if (cartdatanull == null) {
      this.itemcart.push(category);
      localStorage.setItem('localcart', JSON.stringify(this.itemcart));
    } else {

      this.itemcart = JSON.parse(cartdatanull);
      this.itemcart.push(category);
      localStorage.setItem('localcart', JSON.stringify(this.itemcart));
    }
    this.cartNumberfun();
  }
  cartNumber: number = 0;

  cartNumberfun() {
    var cartvalue = JSON.parse(localStorage.getItem('localcart')!);
    this.cartNumber = cartvalue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }
  buyNow() {
    this.router.navigateByUrl('/login')
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
