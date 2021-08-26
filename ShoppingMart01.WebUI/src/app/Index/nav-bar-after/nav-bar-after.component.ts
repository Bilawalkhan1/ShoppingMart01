import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-after',
  templateUrl: './nav-bar-after.component.html',
  styleUrls: ['./nav-bar-after.component.css']
})
export class NavBarAfterComponent implements OnInit {
changeText
  allItems: Array<any> = [
    {
      id: "1",
      displayName: "All Categories",
      children: [
        {
          id: "10",
          displayName: "Automotive",
          route: "/automotive",
        },
        {
          id: "20",
          displayName: "Furniture",
          route: "/furniture",
        },
        {
          id: "30",
          displayName: "Electronics",
          route: "/electronic",
        },
        {
          id: "40",
          displayName: "Jewelry",
          route: "/jewelry",
        },
        {
          id: "50",
          displayName: "Food",
          route: "/food",
        },
        {
          id: "60",
          displayName: "Property",
          route: "/property",
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
      ]
    },
    {
      id: "20",
      displayName: "Home & Decor",
      route: "/furniture",
      children: [
        {
          id: "2010",
          displayName: "Curtains",
          route: "curtains"
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
        },
        {
          id: "3080",
          displayName: "Power Banks",
          route: "powerbanks"
        },
        {
          id: "3090",
          displayName: "Cameras",
          route: "cameras"
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
          displayName: "Diamond",
          route: "Diamound"
        },
        {
          id: "5020",
          displayName: "Gold",
          route: "gold"
        },
        {
          id: "5030",
          displayName: "Silver",
          route: "silver"
        }
        ,
        {
          id: "5030",
          displayName: "Other",
          route: "other"
        }
      ]
    },
    {
      id: "60",
      displayName: "Food",
      route: "/food",
      children: [
        {
          id: "6010",
          displayName: "FastFood",
          route: "fastfood"
        },
        {
          id: "6020",
          displayName: "Vegetable",
          route: "vegetable"
        },
        {
          id: "6030",
          displayName: "Rice",
          route: "rice"
        }
        ,
        {
          id: "6020",
          displayName: "Chicken",
          route: "chicken"
        },
        {
          id: "6030",
          displayName: "Eggs",
          route: "eggs"
        }
      ]

    },
    {
      id: "70",
      displayName: "Property",
      route: "/property",
      children: [
        {
          id: "7010",
          displayName: "Land",
          route: "land"
        },
        {
          id: "7020",
          displayName: "Houses",
          route: "houses"
        },
        {
          id: "7030",
          displayName: "Plots",
          route: "plots"
        },

      ]

    }
    ,
    {
      id: "80",
      displayName: "Sports",
      route: "/sports",
      children: [
        {
          id: "8010",
          displayName: "Cricket",
          route: "apartment"
        },
        {
          id: "8020",
          displayName: "Football",
          route: "football"
        },
        {
          id: "8030",
          displayName: "Hockey",
          route: "hockey"
        }
        ,
        {
          id: "8040",
          displayName: "BasketBall",
          route: "basketball"
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
