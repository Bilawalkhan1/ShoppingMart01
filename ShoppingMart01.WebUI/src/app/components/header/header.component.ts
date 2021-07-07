import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService } from 'angularx-social-login';
import { User } from 'src/app/Classes/user';
import { AuthService } from 'src/app/Services/auth.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AuthguardService } from 'src/app/Services/authguard.service';
import { LoginComponent } from '../login/login.component';
import { Users } from '../signup-form/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  category = 'car'
  userLoggedIn = Users
  user: any;
  userdata;
  searchText = '';
  collapsed = true
  public onToggleSidenav = () => {
  }

  constructor(private auth: AuthService,
    private router: Router,
    private authenticatinservice: AuthenticationService,
    private modalService: NgbModal,
    private socialAuthService: SocialAuthService,
    private authguard: AuthguardService) {
    this.auth.cartSubject.subscribe((data) => {
      this.cartitem = data
    })

  }

  ngOnInit(): void {
    this.cartItem()
  }

  cartitem: number = 0;
  cartItem() {
    if (localStorage.getItem('localcart') !== null) {
      var cartcount = JSON.parse(localStorage.getItem('localcart') || '{}')
      this.cartitem = cartcount.length;
    }
  }

  openModel() {
    this.modalService.open(LoginComponent)
  }

  cartComponent() {
    let result;             
    if (localStorage.getItem('localcart') == null)
      result = alert('Please add products ist')
    else {
      if (localStorage.getItem('token') !== null)
        result = this.router.navigateByUrl('/cart');
      else
        result = this.modalService.open(LoginComponent)
      result = this.authguard.returnUrl = 'cart'
    }

  }

  addProduct() {
    if (localStorage.getItem('token') !== null) {
      this.router.navigateByUrl('/addproduct')

    }
    else {
      this.modalService.open(LoginComponent)
      this.authguard.returnUrl = 'addproduct'
    }
  }

  getUserData() {
    if (localStorage.getItem('token') !== null) {
      let user = localStorage.getItem('user')
      if (user !== null) {
        user = JSON.parse(user)
        this.userdata = user
      }
    }
    else {
      this.modalService.open(LoginComponent)
    }
  }

  logout() {
    this.authenticatinservice.userLogout();
    this.socialAuthService.signOut();
    return this.router.navigateByUrl('')
  }

}
