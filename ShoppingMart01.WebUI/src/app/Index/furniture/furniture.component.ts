import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/Classes/product';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/shared/models/product.service';

@Component({
  selector: 'app-furnitures',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnituresComponent implements OnInit {

  products: any[] = [];
  itemcart: any[] = [];
  category: any
  filteredProducts: product[] = [];
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    'responsive': [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  }
  slideConfig1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }
  constructor(
    private auth: AuthService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartservice: CartService
  ) {
    cartservice.event.subscribe(res => {
      this.cartNumberfun();
    })
  }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category')
    this.getProducts()
  }

  public covertPhotoUrl(photoUrl) {
    return `data:image/jpeg;base64,${photoUrl}`
  }

  private getProducts() {
    this.productService.getVehicleData(this.category).subscribe(products => this.products = products);
    this.filteredProducts = this.products.filter(p => p.type = this.category)
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
}

