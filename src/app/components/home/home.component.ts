import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/product-details.service';
import { CartService } from 'src/app/Services/cart.service';
import { AuthService } from 'src/app/service/auth.service';
import { product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchText: any;
  constructor(
    private productDetails: ProductDetailsService,
    private auth: AuthService,
    private productService: ProductService
  ) {}

  products: product[] = [];

 ngOnInit(): void {
    this.getProducts()
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
    slidesToScroll: 3,
    dots: true,
    infinite: true,
  };
  // products = [
  //   {
  //     proId: 1,
  //     blogImg: '/assets/bikes.jfif',
  //     Name: 'Electric Bicycle',
  //     Price: '$500',
  //     desp: 'An electric bicycle, also known as an e-bike, is a bicycle with an integrated electric motor.',
  //   },
  //   {
  //     proId: 2,
  //     blogImg: '/assets/car.jfif',
  //     Name: 'Stellantis',
  //     Price: '$10000',
  //     desp: 'Lucky Motors is Bringing the World’s fourth Largest Car Manufacturers and tothe Pakistan ..',
  //   },
  //   {
  //     proId: 3,
  //     blogImg: '/assets/furniture.jfif',
  //     Name: 'Furniture',
  //     Price: '$1000',
  //     desp: 'From lahore to Torento sialkot is the fourth Largest furniture Manufacturers and tothe Pakistan .',
  //   },
  //   {
  //     proId: 3,
  //     blogImg: '/assets/fur.jfif',
  //     Name: 'Breslet',
  //     Price: '$50',
  //     desp: '925 sterling silver ring trend creative heavy industry opening adjustable personality.',
  //   },
  //   {
  //     proId: 4,
  //     blogImg: '/assets/car.jfif',
  //     Name: 'Stellantis',
  //     Price: '$10000',
  //     desp: 'Lucky Motors is Bringing the World’s 4th Largest Car Manufacturer to Pakistan ..',
  //   },
  //   {
  //     proId: 5,
  //     blogImg: '/assets/furniture.jfif',
  //     Name: 'Sitting Sofas',
  //     Price: '$1000',
  //     desp: 'From lahore to Torento sialkot is the fourth Largest furniture Manufacturers over the Pakistan .',
  //   },
  //   {
  //     proId: 6,
  //     blogImg: '/assets/fur.jfif',
  //     Name: 'Stellantis',
  //     Price: '$50',
  //     desp: '925 sterling silver ring trend creative industry chain opening adjustable personality jewe .',
  //   },
  //   {
  //     proId: 7,
  //     blogImg: '/assets/bikes.jfif',
  //     Name: 'Electric Bicycle',
  //     Price: '$500',
  //     desp: 'An electric bicycle, also known as an e-bike or bicycle with integrated electric propulsion.',
  //   },
  // ];

  sendProductDetails(blog: object) {
    this.productDetails.sendProduct(blog);
  }

  itemcart: any[] = [];

  addtocart(category: any) {
    let cartdatanull = localStorage.getItem('localcart');
    if (cartdatanull == null) {
      this.itemcart.push(category);
      localStorage.setItem('localcart', JSON.stringify(this.itemcart));
    } else {
      if (cartdatanull) {
      this.itemcart = JSON.parse(cartdatanull);
      this.itemcart.push(category);
      localStorage.setItem('localcart', JSON.stringify(this.itemcart));
      } else {
        localStorage.setItem('localcart', JSON.stringify(this.itemcart));
      }
    }

    this.cartNumberfun();
  }
  cartNumber: number = 0;
  cartNumberfun() {
    var cartvalue = JSON.parse(localStorage.getItem('localcart')!);
    this.cartNumber = cartvalue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }

  onLoadActive() {}
}
