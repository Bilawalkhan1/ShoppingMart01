import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';
declare var $: any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  slideConfig3 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows:false,
    infinite: true,
  }
  cartitem: number = 0;
  constructor (private cartservice: CartService,
    private router: Router) {

  }

  ngOnInit(): void {
    if (localStorage.getItem('localcart') !== null) {
      var cartcount = JSON.parse(localStorage.getItem('localcart') || '{}')
      this.cartitem = cartcount.length;
    }
    this.cartdetails()
  }

  // ngAfterViewInit(): void {
  //   $(document).ready(function () {
  //     var quantitiy = 0;
  //     $('.quantity-right-plus').click(function (e) {
  //       e.preventDefault();
  //       var quantity = parseInt($('#quantity').val());
  //       if(quantitiy<10){
  //         $('#quantity').val(quantity + 1);
  //       }
  //     });

  //     $('.quantity-left-minus').click(function (e) {
  //       e.preventDefault();
  //       var quantity = parseInt($('#quantity').val());
  //       if (quantity > 0) {
  //         $('#quantity').val(quantity - 1);
  //       }
  //     });
  //   });
  // }

  public covertPhotoUrl(photoUrl) {
    return `data:image/jpeg;base64,${photoUrl}`
  }

  getcartdetails: any = []
  cartdetails() {
    if (localStorage.getItem('localcart')) {
      this.getcartdetails = JSON.parse(localStorage.getItem('localcart')!)
      console.log(this.getcartdetails)
    }
  }

  removeitem() {
    localStorage.removeItem('localcart')
    this.getcartdetails = []
    this.cartservice.emitEvent(true);
    if (this.getcartdetails.length === 0) {
      this.router.navigateByUrl('home')
      localStorage.removeItem('localcart')
    }
  }

  removesingleitem(getcartdetails) {
    if (localStorage.getItem('localcart')) {
      this.getcartdetails = JSON.parse(localStorage.getItem('localcart'))
      for (let i = 0; i < this.getcartdetails.length; i++) {
        if (this.getcartdetails[i].id === getcartdetails) {
          this.getcartdetails.splice(i, 1)
          localStorage.setItem('localcart', JSON.stringify(this.getcartdetails))
          this.cartdetails()
        }
        this.cartservice.emitEvent(true);
        if (this.getcartdetails.length === 0) {
          this.router.navigateByUrl('home')
          localStorage.removeItem('localcart')
        }
      }
    }

  }
}
