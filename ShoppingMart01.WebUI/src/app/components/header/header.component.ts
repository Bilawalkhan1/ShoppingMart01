import { Component, OnInit } from '@angular/core';
import { AuthService} from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AuthService) { 
    this.auth.cartSubject.subscribe((data)=>{
      this.cartitem = data
    })
  }

  ngOnInit(): void {
    this.cartItem()
  }
  cartitem:number = 0;
  cartItem(){
    if(localStorage.getItem('localcart')!==null){
      var cartcount =JSON.parse(localStorage.getItem('localcart') || '{}')
      this.cartitem = cartcount.length;
    }
  }
}
