import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbDropdownConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService } from 'angularx-social-login';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { LoginComponent } from 'src/app/accounts/login/login.component';
import { AuthService } from 'src/app/Services/auth.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AuthguardService } from 'src/app/Services/authguard.service';
import { ProductService } from 'src/app/shared/models/product.service';
import { Users } from '../../accounts/signup-form/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoggedIn = Users
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
  modelData: any;
  constructor(private auth: AuthService,
    private router: Router,
    private config: NgbDropdownConfig,
    private http: HttpClient,
    private authenticatinservice: AuthenticationService,
    private modalService: NgbModal,
    private socialAuthService: SocialAuthService,
    private productService: ProductService,
    private authguard: AuthguardService) {
    this.auth.cartSubject.subscribe((data) => {
      this.cartitem = data
      config.placement = 'left';
    })

  }

  ngOnInit(): void {
    this.cartItem()
    this.searchField = new FormControl();
    this.subscription.add(
      this.searchField.valueChanges
        .subscribe(term => {
          this.searchArray = []
          this.searchValue.push(term);
        })
    )
  }

  onSearchChange(searchValue) {
    this.showSearchContainer = true
    this.http.get<any>(`http://localhost:3000/brands`)
      .subscribe(data => {
        data.forEach(element => {
          this.searchArray.push(element.name)
        });
      });
  }

  selectValue(data) {
    this.searchField.patchValue(data);
    this.productService.getList(data).subscribe((filterData: any) => {
      console.log('data', filterData)
      this.modelData = filterData;
      this.sendData();
      this.showSearchContainer = false
      this.router.navigateByUrl('/ProductBrowsing/getcategory')
    })

  }
  sendData() {
    this.productService.sendProduct(this.modelData)
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