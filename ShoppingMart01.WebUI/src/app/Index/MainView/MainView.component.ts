import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductService } from 'src/app/shared/models/product.service';

@Component({
  selector: 'app-MainView',
  templateUrl: './MainView.component.html',
  styleUrls: ['./MainView.component.css'],
})
export class MainViewComponent implements OnInit {
  searchText: any;
  displayMode: number;
  products: any[] = [];

  constructor (
    private auth: AuthService,
    private productService: ProductService,
    private cartservice: CartService
    ){
    cartservice.event.subscribe(res => {
      this.cartNumberfun();})
    }

  ngOnInit(): void {
    this.getProducts()
    this.onDisplayModeChange(1)
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

  slideConfig2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: false
  };

  sendProductDetails(blog: object) {
    this.productService.sendProduct(blog);
  }

  itemcart: any[] = [];

  addtocart(category: any, element) {
    let cartdatanull = localStorage.getItem('localcart');
    if (cartdatanull == null) {
      this.itemcart.push(category);
      localStorage.setItem('localcart', JSON.stringify(this.itemcart));
    } else {

      this.itemcart = JSON.parse(cartdatanull);
      this.itemcart.push(category);
      localStorage.setItem('localcart', JSON.stringify(this.itemcart));
    }

    element.textContent = 'ADDED';
    element.disabled = true;
    // element.hide;
    this.cartNumberfun();
  }
  cartNumber: number = 0;
  cartNumberfun() {
    var cartvalue = JSON.parse(localStorage.getItem('localcart')!);
    this.cartNumber = cartvalue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }

  onLoadActive() { }
}
