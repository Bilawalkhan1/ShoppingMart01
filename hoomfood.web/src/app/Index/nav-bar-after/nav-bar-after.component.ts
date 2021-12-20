import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService } from 'angularx-social-login';
import { LoginComponent } from 'src/app/accounts/login/login.component';
import { MyprofileComponent } from 'src/app/accounts/myprofile/myprofile.component';
import { Users } from 'src/app/accounts/signup-form/users';
import { AuthService } from 'src/app/Services/auth.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { AuthguardService } from 'src/app/Services/authguard.service';
import { ProductService } from 'src/app/shared/models/product.service';
declare var $: any;

@Component({
  selector: 'app-nav-bar-after',
  templateUrl: './nav-bar-after.component.html',
  styleUrls: ['./nav-bar-after.component.css']
})
export class NavBarAfterComponent implements OnInit, AfterViewInit {
  changeText
  userLoggedIn = Users
  user: any;
  cartitem: number = 0;
  userdata: string;
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
  
  public covertPhotoUrl(photoUrl) {
    return `data:image/jpeg;base64,${photoUrl}`
  }
   myProfile() {
    if (localStorage.getItem('token') !== null) {
      let user = localStorage.getItem('user')
      if (user !== null) {
        user = JSON.parse(user)
        this.userdata = user
        this.productService.userData = this.userdata
        console.log('user', this.userdata)
        this.router.navigateByUrl('accounts/myprofile')
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
        console.log('user',user)
      }
    }
    else {
      // this.modalService.open(LoginComponent)
      this.router.navigateByUrl('/login')
    }
  }

  logout() {
    this.authenticatinservice.userLogout();
    this.socialAuthService.signOut();
    return this.router.navigateByUrl('')
  }

  allItems: Array<any> = [
    {
      id: "1",
      displayName: "All Categories",
      children: [
        {
          id: "10",
          displayName: "Chicken",
          route: "/vehicle",
        },
        {
          id: "20",
          displayName: "Beef",
          route: "/furniture",
        },
        {
          id: "50",
          displayName: "Mutton",
          route: "/jewelry",
        },
        {
          id: "60",
          displayName: "Biryani",
          route: "/food",
        },
        {
          id: "70",
          displayName: "Mix Fruits",
          route: "/grossery",
        },
        {
          id: "80",
          displayName: "Pizza",
          route: "/homewear",
        },

      ]
    }
  ]

  navItem: Array<any> = [
    {
      id: "10",
      displayName: "Biryani",
      route: "/automotive",
      children: [
        {
          id: "1010",
          displayName: "Biryani",
          route: "bike"
        },
        {
          id: "1020",
          displayName: "Biryani",
          route: "car"
        },
        {
          id: "1030",
          displayName: "Biryani",
          route: "bike-accessories"
        },
        {
          id: "1040",
          displayName: "Biryani",
          route: "car-accessories"
        }
      ],
      images: [
        {
          id: "1020",
          img: 'assets/navbar-images/grocery-1.jfif',
          route: "car"
        },
        {
          id: "1010",
          img: 'assets/navbar-images/grocery-1.jfif',
          route: "bike"
        },
        {
          id: "1040",
          img:'assets/navbar-images/grocery-1.jfif',
          route: "car-accessories"
        }
      ]
    },
    {
      id: "20",
      displayName: "Chicken",
      route: "/furniture",
      children: [
        {
          id: "2010",
          displayName: "Chicken",
          route: "curtains-blinds"
        },
        {
          id: "2020",
          displayName: "Chicken",
          route: "rugs-carpets"
        },
        {
          id: "2030",
          displayName: "Chicken",
          route: "mirror"
        },
        {
          id: "2040",
          displayName: "Chicken",
          route: "bedroom-furniture"
        },
        {
          id: "2050",
          displayName: "Chicken",
          route: "gaming-furniture"
        },
        {
          id: "2060",
          displayName: "Chicken",
          route: "kitchen-furniture"
        }
      ],
      images: [
        {
          id:"2040",
          img: 'assets/navbar-images/grocery-1.jfif',
          route: "bedroom-furniture"
        },
        {
          id:"2020",
          img: 'assets/navbar-images/grocery-1.jfif',
          route: "rugs-carpets"
        },
        {
          id:"2030",
          img:'assets/navbar-images/grocery-1.jfif',
          route: "mirror"
        }
      ]
    },
    {
      id: "30",
      displayName: "Beef",
      route: "/electronic",
      children: [
        {
          id: "3010",
          displayName: "Beef",
          route: "mobile"
        },
        {
          id: "3020",
          displayName: "Beef",
          route: "laptop"
        },
        {
          id: "3030",
          displayName: "Beef",
          route: "mobile-accessories"
        },
        {
          id: "3040",
          displayName: "Beef",
          route: "laptop-accessories"
        },
        {
          id: "3050",
          displayName: "Beef",
          route: "television"
        },
        {
          id: "3060",
          displayName: "Beef",
          route: "speakers"
        },
        {
          id: "3070",
          displayName: "Beef",
          route: "headphones"
        }
      ],
      images: [
        {
          id: "3020",
          img: 'assets/navbar-images/grocery-1.jfif',
          route: "laptop"
        },
        {
          id: "3040",
          img: 'assets/navbar-images/grocery-1.jfif',
          route: "laptop-accessories"
        },
        {
          id: "3070",
          img: 'assets/navbar-images/grocery-1.jfif',
          route: "headphones"
        }
      ]
    },
    {
      id: "40",
      displayName: "Mutton",
      route: "/watches",
      children: [
        {
          id: "4010",
          displayName: "Mutton",
          route: "men's-watches"
        },
        {
          id: "4020",
          displayName: "Mutton",
          route: "women's-Watches"
        },
        {
          id: "4030",
          displayName: "Mutton",
          route: "smart-watches"
        }
      ],
      images: [
        {
          id: "4020",
          img: 'assets/navbar-images/grocery-1.jfif',
          route: "women's-Watches"
        },
        {
          id: "4010",
          img: 'assets/navbar-images/grocery-1.jfif',
          route: "men's-watches"
        },
        {
          id: "4030",
          img: 'assets/navbar-images/grocery-1.jfif',
          route: "smart-watches"
        }
      ]
    },
    {
      id: "50",
      displayName: "Mix Fruits",
      route: "/jewelry",
      children: [
        {
          id: "5010",
          displayName: "Mix Fruits",
          route: "earrings"
        },
        {
          id: "5020",
          displayName: "Mix Fruits",
          route: "necklaces"
        },
        {
          id: "5030",
          displayName: "Mix Fruits",
          route: "rings"
        },
        {
          id: "5040",
          displayName: "Mix Fruits",
          route: "bracelets"
        },
        {
          id: "5050",
          displayName: "Mix Fruits",
          route: "pearls"
        }
      ],
      images: [
        {
          id: "5010",
          img: 'assets/navbar-images/grocery-1.jfif',
          route: "earrings"
        },
        {
          id: "5030",
          img: 'assets/navbar-images/grocery-1.jfif',
          route: "rings"
        },
        {
          
          id: "5020",
          img: 'assets/navbar-images/grocery-1.jfif',
          route: "necklaces"
        }
      ]
    },
    {
      id: "60",
      displayName: "Pizza",
      route: "/grossery",
      children: [
        {
          id: "6010",
          displayName: "Pizza",
          route: "beverages"
        },
        {
          id: "6020",
          displayName: "Pizza",
          route: "packed-food"
        },
        {
          id: "6030",
          displayName: "Pizza",
          route: "snack-food"
        },
        {
          id: "6040",
          displayName: "Pizza",
          route: "Choclates"
        },
        {
          id: "6050",
          displayName: "Pizza",
          route: "cookin-essentials"
        },
        {
          id: "6060",
          displayName: "Pizza",
          route: "pet-essentials"
        }
      ],
      images: [
        {
          id: "6030",
          img: 'assets/navbar-images/grocery-1.jfif',
          route: "snack-food"
        },
        {
          id: "6010",
          img: 'assets/navbar-images/grocery-3.jfif',
          route: "beverages"
        },
        {
          id: "6040",
          img: 'assets/navbar-images/grocery-2.jfif',
          route: "Choclates"
        }
      ]
    },
    {
      id: "70",
      displayName: "Fast Foods",
      route: "/sports",
      children: [
        {
          id: "7010",
          displayName: "Fast Foods",
          route: "camping-hiking"
        },
        {
          id: "7020",
          displayName: "Fast Foods",
          route: "team-sports"
        },
        {
          id: "7030",
          displayName: "Fast Foods",
          route: "racquet-sports"
        },
        {
          id: "7040",
          displayName: "Fast Foods",
          route: "cardio-training"
        },
        {
          id: "7050",
          displayName: "Fast Foods",
          route: "sport-nutritions"
        }
      ],
      images: [
        {
          id: "7010",
          img: 'assets/navbar-images/food1.jpg',
          route: "camping-hiking"
        },
        {
          id: "7040",
          img: 'assets/navbar-images/food1.jpg',
          route: "cardio-training"
        },
        {
          id: "7030",
          img: 'assets/navbar-images/food1.jpg',
          route: "racquet-sports"
        }
      ]
    }
  ]
  
  ngAfterViewInit() {
    $('nav .dropdown').hover(function () {
      var $this = $(this);
      $this.addClass('show');
      $this.find('> a').attr('aria-expanded', true);
      $this.find('.dropdown-menu').addClass('show');
    }, function () {
      var $this = $(this);
      $this.removeClass('show');
      $this.find('> a').attr('aria-expanded', false);
      $this.find('.dropdown-menu').removeClass('show');
    });

    $('nav .dropdown').hover(
      function () {
        $('.back-drop').css('display', 'block');
      },
      function () {
        $('.back-drop').css('display', 'none');

      }
    );

    $('nav .dropdown').on('click', function(){
      $('.dropdown-menu').removeClass('show');
      $('.back-drop').css('display', 'none');
    })

    $('.dropdown-item').on('click', function(){
      $('.dropdown-menu').removeClass('show');
      $('.back-drop').css('display', 'none');
    })
  }

}
