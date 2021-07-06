import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService } from 'angularx-social-login';
import { User } from 'src/app/Classes/user';
import { AuthguardService } from 'src/app/Services/authguard.service';
import { LoginComponent } from '../login/login.component';
import { Users } from '../signup-form/users';
import { AuthService } from 'src/app/Services/auth.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  category = 'car'
  userLoggedIn = Users
  isUserLogin
  userType: string
  user: any;
  userdata;
  dataset = ['MDB', 'Angular', 'Bootstrap', 'Framework', 'SPA', 'React', 'Vue'];
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
      this.isUserLogin = this.authenticatinservice.currentUserValue;
      // this.isUserLogin = this.authServ.logUserDetails
    })
    // this.authenticatinservice.filterProducts().subscribe(data=>{
    //   JSON.parse(JSON.stringify(data)).dataforEach(element => {
    //     this.usersArray.push(element.name);
    //   });
    // })
  }

  ngOnInit(): void {    
    this.cartItem()
   
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    // this.userType = this.authServ.getUserData()
    // console.log('oncheck' , this.userType)
  } 
  
  
  get isAdmin() {
    return this.userType === 'admin';
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
    if (localStorage.getItem('token') !== null) {
      this.router.navigateByUrl('/cart')

    }
    else {
      this.modalService.open(LoginComponent)
      this.authguard.returnUrl = 'cart'
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
