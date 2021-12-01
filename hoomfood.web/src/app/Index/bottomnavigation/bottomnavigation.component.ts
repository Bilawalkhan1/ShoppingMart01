import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService } from 'angularx-social-login';
import { LoginComponent } from 'src/app/accounts/login/login.component';
import { MyprofileComponent } from 'src/app/accounts/myprofile/myprofile.component';
import { ProfileComponent } from 'src/app/accounts/profile/profile.component';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AuthguardService } from 'src/app/Services/authguard.service';
import { ProductService } from 'src/app/shared/models/product.service';

@Component({
  selector: 'app-bottomnavigation',
  templateUrl: './bottomnavigation.component.html',
  styleUrls: ['./bottomnavigation.component.css']
})
export class BottomnavigationComponent implements OnInit {
  userdata: string

  constructor(private router: Router,
    private modalService: NgbModal,
    private authguard: AuthguardService,
    private productService: ProductService,
    private authenticatinservice: AuthenticationService,
    private socialAuthService: SocialAuthService

  ) { }

  ngOnInit(): void {
  }

  year = (new Date()).getFullYear();
  addProduct() {
    if (localStorage.getItem('token') !== null) {
      this.router.navigateByUrl('admin/sellproducts') 
    }
    else {
      this.modalService.open(LoginComponent)
      this.authguard.returnUrl = 'admin/sellproducts'
    }
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

  myProfile() {
    if (localStorage.getItem('token') !== null) {
      let user = localStorage.getItem('user')
      if (user !== null) {
        user = JSON.parse(user)
        this.userdata = user
        this.productService.userData = this.userdata
        this.modalService.open(MyprofileComponent)
      }
    }
    else {
      this.modalService.open(LoginComponent)
    }
  }

  getUserData() {
    if (localStorage.getItem('token') !== null) {
      let user = localStorage.getItem('user')
      if (user !== null) {
        user = JSON.parse(user)
        this.userdata = user
        this.productService.userData = this.userdata
        this.modalService.open(ProfileComponent)
      }
    }
    else {
      this.modalService.open(LoginComponent)
    }
  }

  messageComponent() {
    if (localStorage.getItem('token') == null) {
      this.modalService.open(LoginComponent)
    }
  }

logout() {
  if (this.authenticatinservice) {
    this.authenticatinservice.userLogout();
  }
  if (this.socialAuthService) {
    this.socialAuthService.signOut();
  }

  return this.router.navigateByUrl('')
}

socialLinks =
  [
    {
      icon: 'fa-facebook-f',
      link: '#'
    },
    {
      icon: 'fa-twitter',
      link: '#'
    },
    {
      icon: 'fa-instagram',
      link: '#'
    },
    {
      icon: 'fa-youtube',
      link: '#'
    }
  ]

}
