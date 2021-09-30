import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/shared/models/product.service';
import { product } from './../../Classes/product';

@Component({
  selector: 'app-furnitures',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.css']
})
export class FurnituresComponent implements OnInit {
  @Input('Shopping-Cart') shoppingCart;
  product: product
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
  constructor (
    private auth: AuthService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartservice: CartService,
    private router: Router
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

  public addtocart(product: product) {
     this.cartservice.addToCart(product)
    let cartdatanull = localStorage.getItem('localcart');
    if (cartdatanull == null) {
      this.itemcart.push(product);
      localStorage.setItem('localcart', JSON.stringify(this.itemcart));
    } else {

      this.itemcart = JSON.parse(cartdatanull);
      this.itemcart.push(product);
      localStorage.setItem('localcart', JSON.stringify(this.itemcart));
    }
    this.cartNumberfun();
  }
  removeFromCart(product: product){
    this.cartservice.removeFromCart(product);
  }

  getQuantity(modelNumber) {
  // console.log(this.shoppingCart.items)
   if (!this.shoppingCart) return 0;
  //  setInterval(() =>  {let item = this.shoppingCart.items[modelNumber]}, 3000);
   let item = this.shoppingCart.items[modelNumber];
   //console.log(item)
    return item ? item.quantity : 0;
  }

  cartNumber: number = 0;

  cartNumberfun() {
    var cartvalue = JSON.parse(localStorage.getItem('localcart')!);
    this.cartNumber = cartvalue.length;
    this.auth.cartSubject.next(this.cartNumber);
  }
  public seeAllData() {
    this.router.navigateByUrl('furniture/20')
  }
}

