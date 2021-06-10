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

  public covertPhotoUrl(photoUrl){
    return `data:image/jpeg;base64,${photoUrl}`
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
   removesingleitem(getcartdetails){
     if(localStorage.getItem('localcart')){
       this.getcartdetails =JSON.parse( localStorage.getItem('localcart'))
       for(let i = 0 ; i<this.getcartdetails.length; i++){
         if(this.getcartdetails[i].id === getcartdetails){
           this.getcartdetails.splice(i , 1)
           localStorage.setItem('localcart',JSON.stringify(this.getcartdetails))
           this.cartdetails()
         }
       }
     }
     
   }
}
