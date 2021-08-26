import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService } from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { LoginComponent } from 'src/app/accounts/login/login.component';
import { Users } from 'src/app/accounts/signup-form/users';
import { AuthService } from 'src/app/Services/auth.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AuthguardService } from 'src/app/Services/authguard.service';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.css']
})
export class TopNavBarComponent implements OnInit {
  userLoggedIn = Users
  changeText
  changeText1
  changeText2
  changeText3
  changeText4
  changeText5
  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
  }
  user: any;
  cartitem: number = 0;
  userdata;
  searchText = '';
  showSearchContainer = false;
  searchArray: Array<any> = [];
  searchField: FormControl;
  collapsed = true
  searchValue: string[] = [];
  subscription = new Subscription();
  constructor(private auth: AuthService,
    private router: Router,
    private http: HttpClient,
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
    this.searchField = new FormControl();
    this.subscription.add(
      this.searchField.valueChanges
        .pipe(
          debounceTime(1000),
          distinctUntilChanged()
        )
        .subscribe(term => {
          this.searchValue.push(term);
        }
        )
    )
  }


  onSearchChange(searchValue: string): void {
    console.log('event', searchValue)
    this.http.get<any>(`http://localhost:3000/Product`)
      .subscribe(data => {
        console.log(data)
        data.forEach(element => {
          this.searchArray.push(element.Product_Name);
          this.showSearchContainer = !this.showSearchContainer;
        });
      });

  }

  selectValue(data) {
    this.searchField.patchValue(data);
    this.showSearchContainer = false;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
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
      this.router.navigateByUrl('admin/sellproducts')

    }
    else {
      this.modalService.open(LoginComponent)
      this.authguard.returnUrl = 'admin/sellproducts'
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