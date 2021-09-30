import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductService } from 'src/app/shared/models/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-MainView',
  templateUrl: './MainView.component.html',
  styleUrls: ['./MainView.component.css'],
})
export class MainViewComponent implements OnInit, OnDestroy {
  searchText: any;
  displayMode: number;
  products: any[] = [];
  itemcart: any[] = [];

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 2000,
    autoplay: true,
    infinite: true,
    arrows: false
  }
  slideConfig1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 1000,
    autoplay: true,
    infinite: true,
    arrows: false
  }
  slideConfig2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: false
  };
  cart: any;
  subscription: Subscription
  constructor (
    private auth: AuthService,
    private productService: ProductService,
    private cartservice: CartService
  ) {
    cartservice.event.subscribe(res => {
      this.cartNumberfun();
    })
  }


  async ngOnInit() {
    this.getProducts()
    this.onDisplayModeChange(1);

    this.cartservice.getCart().then( cart=>{ 
      this.cart = cart
      console.log(cart)
    })
    // this.subscription = (await this.cartservice.getCart())
    // .subscribe(x =>{
    //   this.cart = x
    //   console.log(x)})
  }

  public covertPhotoUrl(photoUrl) {
    return `data:image/jpeg;base64,${photoUrl}`
  }
  public onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
  }

  private getProducts() {
    this.productService.getProducts().subscribe(products => this.products = products);
  }

  public sendProductDetails(blog: object) {
    this.productService.sendProduct(blog);
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

  onLoadActive() { }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
