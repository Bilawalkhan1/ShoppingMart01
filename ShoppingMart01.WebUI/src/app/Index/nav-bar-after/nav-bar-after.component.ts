import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDropdownConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService } from 'angularx-social-login';
import { LoginComponent } from 'src/app/accounts/login/login.component';
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

  allItems: Array<any> = [
    {
      id: "1",
      displayName: "All Categories",
      children: [
        {
          id: "10",
          displayName: "Vehicle",
          route: "/vehicle",
        },
        {
          id: "20",
          displayName: "Furniture",
          route: "/furniture",
        },
        {
          id: "50",
          displayName: "Jewelry",
          route: "/jewelry",
        },
        {
          id: "60",
          displayName: "Food",
          route: "/food",
        },
        {
          id: "70",
          displayName: "Grossery",
          route: "/grossery",
        },
        {
          id: "80",
          displayName: "Home Wear",
          route: "/homewear",
        },

      ]
    }
  ]

  navItem: Array<any> = [
    {
      id: "10",
      displayName: "Automotive",
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
          img: 'assets/navbar-images/vehicle-1.jpg'
        },
        {
          img: 'assets/navbar-images/vehicle-2.jpg'
        }
      ]
    },
    {
      id: "20",
      displayName: "Home & Decor",
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
          img: 'assets/navbar-images/home-1.jpg'
        },
        {
          img: 'assets/navbar-images/home-2.jpg'
        },
        // {
        //   img:'assets/navbar-images/home-3.png'
        // }
      ]
    },
    {
      id: "30",
      displayName: "Electronics",
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
        // {
        //   id: "3080",
        //   displayName: "Cameras",
        //   route: "cameras"
        // }
      ],
      images: [
        {
          img: 'assets/navbar-images/electronics-1.jpg'
        },
        {
          img: 'assets/navbar-images/electronics-2.jpg'
        },
        {
          img: 'assets/navbar-images/electronics-3.jpg'
        }
      ]
    },
    {
      id: "40",
      displayName: "Watches",
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
          img: 'assets/navbar-images/watch-1.jpg'
        },
        {
          img: 'assets/navbar-images/watch-2.jpg'
        },
        {
          img: 'assets/navbar-images/watch-3.jpg'
        }
      ]
    },
    {
      id: "50",
      displayName: "Jewelry",
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
          img: 'assets/navbar-images/jew-1.jpg'
        },
        {
          img: 'assets/navbar-images/jewe-2.jpg'
        },
        {
          img: 'assets/navbar-images/jewe-3.jpg'
        }
      ]
    },
    {
      id: "60",
      displayName: "Grossery",
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
          img: 'assets/navbar-images/grocery-1.jfif'
        },
        {
          img: 'assets/navbar-images/grocery-3.jfif'
        },
        {
          img: 'assets/navbar-images/grocery-2.jfif'
        }
      ]
    },
    {
      id: "70",
      displayName: "Sports",
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
          img: 'assets/navbar-images/sports-1.png'
        },
        {
          img: 'assets/navbar-images/sports-2.png'
        },
        {
          img: 'assets/navbar-images/sports-3.png'
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
