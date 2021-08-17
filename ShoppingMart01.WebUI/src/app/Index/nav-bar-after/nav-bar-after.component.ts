import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-after',
  templateUrl: './nav-bar-after.component.html',
  styleUrls: ['./nav-bar-after.component.css']
})
export class NavBarAfterComponent implements OnInit {

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
      id: "50",
      displayName: "Jewelry",
      route: "/jewelry",
      children: [
        {
          id: "5010",
          displayName: "Jewelry",
          route: "jewelry"
        },
        {
          id: "5020",
          displayName: "Commercial",
          route: "commercial"
        },
        {
          id: "5030",
          displayName: "Land",
          route: "land"
        }
      ]
    },
    {
      id: "60",
      displayName: "Food",
      route: "/property",
      children: [
        {
          id: "6010",
          displayName: "Apartment",
          route: "apartment"
        },
        {
          id: "6020",
          displayName: "Commercial",
          route: "commercial"
        },
        {
          id: "6030",
          displayName: "Land",
          route: "land"
        }
      ]

    },
    {
      id: "70",
      displayName: "Grossery",
      route: "/property",
      children: [
        {
          id: "7010",
          displayName: "Apartment",
          route: "apartment"
        },
        {
          id: "7020",
          displayName: "Commercial",
          route: "commercial"
        },
        {
          id: "7030",
          displayName: "Land",
          route: "land"
        }
      ]

    }
    ,
    {
      id: "80",
      displayName: "Sports",
      route: "/property",
      children: [
        {
          id: "8010",
          displayName: "Apartment",
          route: "apartment"
        },
        {
          id: "8020",
          displayName: "Commercial",
          route: "commercial"
        },
        {
          id: "8030",
          displayName: "Land",
          route: "land"
        }
      ]
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
