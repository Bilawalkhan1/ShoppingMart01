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
          displayName: "Bike Accessories",
          route: "bike-accessories"
        },
        {
          id: "1040",
          displayName: "Car Accessories",
          route: "car-accessories"
        }
      ],
      images: [
        {
          id: "1020",
          img: 'assets/navbar-images/vehicle-1.jpg',
          route: "car"
        },
        {
          id: "1010",
          img: 'assets/navbar-images/vehicle-2.jpg',
          route: "bike"
        },
        {
          id: "1040",
          img:'assets/navbar-images/vehicle3.jfif',
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
          displayName: "Curtains & Blinds",
          route: "curtains-blinds"
        },
        {
          id: "2020",
          displayName: "Rugs & Carpets",
          route: "rugs-carpets"
        },
        {
          id: "2030",
          displayName: "Mirrors",
          route: "mirror"
        },
        {
          id: "2040",
          displayName: "Bedroom Furniture",
          route: "bedroom-furniture"
        },
        {
          id: "2050",
          displayName: "Gaming Furniture",
          route: "gaming-furniture"
        },
        {
          id: "2060",
          displayName: "Kitchen Furniture",
          route: "kitchen-furniture"
        }
      ],
      images: [
        {
          id:"2040",
          img: 'assets/navbar-images/h1.jfif',
          route: "bedroom-furniture"
        },
        {
          id:"2020",
          img: 'assets/navbar-images/h2.jfif',
          route: "rugs-carpets"
        },
        {
          id:"2030",
          img:'assets/navbar-images/h3.jfif',
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
          displayName: "Mobile Accessories",
          route: "mobile-accessories"
        },
        {
          id: "3040",
          displayName: "Laptop Accessories",
          route: "laptop-accessories"
        },
        {
          id: "3050",
          displayName: "Televsions",
          route: "television"
        },
        {
          id: "3060",
          displayName: "Speakers",
          route: "speakers"
        },
        {
          id: "3070",
          displayName: "Headphones",
          route: "headphones"
        }
      ],
      images: [
        {
          id: "3020",
          img: 'assets/navbar-images/electronics-1.jpg',
          route: "laptop"
        },
        {
          id: "3040",
          img: 'assets/navbar-images/electronics-2.jpg',
          route: "laptop-accessories"
        },
        {
          id: "3070",
          img: 'assets/navbar-images/electronics-3.jpg',
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
          displayName: "Men's Watches",
          route: "men's-watches"
        },
        {
          id: "4020",
          displayName: "Women's Watches",
          route: "women's-Watches"
        },
        {
          id: "4030",
          displayName: "Smart Watches",
          route: "smart-watches"
        }
      ],
      images: [
        {
          id: "4020",
          img: 'assets/navbar-images/watch-1.jpg',
          route: "women's-Watches"
        },
        {
          id: "4010",
          img: 'assets/navbar-images/watch-2.jpg',
          route: "men's-watches"
        },
        {
          id: "4030",
          img: 'assets/navbar-images/watch-3.jpg',
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
          displayName: "Earrings",
          route: "earrings"
        },
        {
          id: "5020",
          displayName: "Necklaces",
          route: "necklaces"
        },
        {
          id: "5030",
          displayName: "Rings",
          route: "rings"
        },
        {
          id: "5040",
          displayName: "Bracelets",
          route: "bracelets"
        },
        {
          id: "5050",
          displayName: "Pearls",
          route: "pearls"
        }
      ],
      images: [
        {
          id: "5010",
          img: 'assets/navbar-images/jew-1.jpg',
          route: "earrings"
        },
        {
          id: "5030",
          img: 'assets/navbar-images/jewe-2.jpg',
          route: "rings"
        },
        {
          
          id: "5020",
          img: 'assets/navbar-images/jewe-3.jpg',
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
          displayName: "Beverages",
          route: "beverages"
        },
        {
          id: "6020",
          displayName: "Packed Food",
          route: "packed-food"
        },
        {
          id: "6030",
          displayName: "Snack Food",
          route: "snack-food"
        },
        {
          id: "6040",
          displayName: "Choclates",
          route: "Choclates"
        },
        {
          id: "6050",
          displayName: "Cooking Essentials",
          route: "cookin-essentials"
        },
        {
          id: "6060",
          displayName: "Pet Essentials",
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
          displayName: "Camping & Hiking",
          route: "camping-hiking"
        },
        {
          id: "7020",
          displayName: "Team Sports",
          route: "team-sports"
        },
        {
          id: "7030",
          displayName: "Racquet Sports",
          route: "racquet-sports"
        },
        {
          id: "7040",
          displayName: "Cardio Training",
          route: "cardio-training"
        },
        {
          id: "7050",
          displayName: "Sport Nutritions",
          route: "sport-nutritions"
        }
      ],
      images: [
        {
          id: "7010",
          img: 'assets/navbar-images/sports-1.png',
          route: "camping-hiking"
        },
        {
          id: "7040",
          img: 'assets/navbar-images/sports-2.png',
          route: "cardio-training"
        },
        {
          id: "7030",
          img: 'assets/navbar-images/sports-4.jfif',
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
