import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  slideConfig3 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
  }
  constructor( private cartservice: CartService,
    private router:Router) { 
    
  }

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
     this.cartservice.emitEvent(true);  
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
         this.cartservice.emitEvent(true);
         if(this.getcartdetails.length === 0){
          this.router.navigateByUrl('home')
          localStorage.removeItem('localcart')
        }
       }
     }
     
   }
}
