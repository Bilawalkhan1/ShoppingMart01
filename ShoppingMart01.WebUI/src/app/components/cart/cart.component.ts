import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.cartdetails()
  }

  getcartdetails:any = []
   cartdetails(){
     if(localStorage.getItem('localcart')){
       this.getcartdetails =JSON.parse(localStorage.getItem('localcart')!) 
       console.log(this.getcartdetails)
     }
   }
   removeitem(){
     localStorage.removeItem('localcart')
     this.getcartdetails = []
   }
   removesingleitem(){
     
   }
}
