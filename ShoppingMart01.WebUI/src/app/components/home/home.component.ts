import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/Services/product-details.service';
import { CartService } from 'src/app/Services/cart.service';
import { AuthService } from 'src/app/Services/auth.service';
import { product } from 'src/app/Classes/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchText: any;
  displayMode: number;
  constructor(
    private productDetails: ProductDetailsService,
    private auth: AuthService,
    private productService: ProductService
  ) { }

  products: any[] = [];

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

  images = [
    { img: '/assets/bikes.jfif' },
    { img: '/assets/car.jfif' },
    { img: '/assets/bike.jfif' },
    { img: '/assets/fur.jfif' },
    { img: '/assets/jewel.jfif' },
    { img: '/assets/furn.jfif' },
    { img: '/assets/jewelery.jfif' },
    { img: '/assets/furniture.jfif' },
    { img: '/assets/cars.jfif' },
  ];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 2000,
    autoplay: true,
    infinite: true,
    arrows: true
  }
  slideConfig1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 1000,
    autoplay: true,
    infinite: true,
  }
  slideConfig2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: true
  };

  sendProductDetails(blog: object) {
    this.productDetails.sendProduct(blog);
  }

  itemcart: any[] = [];

  addtocart(category: any, element , text) {
    let cartdatanull = localStorage.getItem('localcart');
    if (cartdatanull == null) {
      this.itemcart.push(category);
      localStorage.setItem('localcart', JSON.stringify(this.itemcart));
    } else {

      this.itemcart = JSON.parse(cartdatanull);
      this.itemcart.push(category);
      localStorage.setItem('localcart', JSON.stringify(this.itemcart));
    }
    element.textContent = text;
    element.disabled = true;
    element.hide;
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
