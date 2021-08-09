import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService } from 'angularx-social-login';
import { LoginComponent } from 'src/app/accounts/login/login.component';
import { AuthService } from 'src/app/Services/auth.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AuthguardService } from 'src/app/Services/authguard.service';
import { Users } from '../../accounts/signup-form/users';

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

  navItem: Array<any> = [
    {
      id: "10",
      displayName: "Vehicle",
      route: "/vehicle",
      children: [
        {
          id: "1010",
          displayName: "Bike",
          route: "bike"
        },
        {
          id: "1020",
          displayName: "Car",
          route: "car"
        },
        {
          id: "1030",
          displayName: "Bus",
          route: "bus"
        }
      ]
    },
    {
      id: "20",
      displayName: "Furniture",
      route: "/furniture",
      children: [
        {
          id: "2010",
          displayName: "Curtain",
          route: "curtain"
        },
        {
          id: "2020",
          displayName: "brand new",
          route: "brand new"
        },
        {
          id: "2030",
          displayName: "Wood Furniture",
          route: "wood-furniture"
        },
        {
          id: "2040",
          displayName: "old",
          route: "old"
        }
      ]
    },
    {
      id: "30",
      displayName: "Electronic",
      route: "/electronic",
      children: [
        {
          id: "3010",
          displayName: "Mobile",
          route: "mobile"
        },
        {
          id: "3020",
          displayName: "Laptop",
          route: "laptop"
        },
        {
          id: "3030",
          displayName: "Tablet",
          route: "tablet"
        }
      ]
    },
    {
      id: "40",
      displayName: "Property",
      route: "/property",
      children: [
        {
          id: "4010",
          displayName: "Apartment",
          route: "apartment"
        },
        {
          id: "4020",
          displayName: "Commercial",
          route: "commercial"
        },
        {
          id: "4030",
          displayName: "Land",
          route: "land"
        }
      ]
    }

  ]

  public onToggleSidenav = () => {
  }

  constructor (private auth: AuthService,
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
