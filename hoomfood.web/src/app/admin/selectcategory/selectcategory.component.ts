import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectcategory',
  templateUrl: './selectcategory.component.html',
  styleUrls: ['./selectcategory.component.css']
})
export class SelectcategoryComponent implements OnInit {
  values: any[] = []
  category: string
  categoryid: string;

  constructor() { }

  subcategory: Array<any> = [
    { id: "3010", name: 'Mobile', value: ['Mobile'], route: "Mobile" },
    { id: "3020", name: 'Laptop', value: ['Laptop'], route: "Laptop" },
    { id: "3030", name: 'Mobile Accessories', value: ['Mobile Accessories'], route: "Mobile Accessories" },
    { id: "3040", name: 'Laptop Accessories', value: ['Laptop Accessories'], route: "Laptop Accessories" },
    { id: "3050", name: 'Televsions', value: ['Televsions'], route: "Televsions" },
    { id: "3060", name: 'Speakers', value: ['Speakers'], route: "Speakers" },
    { id: "3070", name: 'Headphones', value: ['Headphones'], route: "Headphones" }
    // { id: "3090", name: 'Cameras', value: ['Cameras'], route: "Cameras" },
  ];
  vehicle: Array<any> = [
    { id: "1010", name: 'Bike', value: ['Bike'], route: "bike" },
    { id: "1020", name: 'Car', value: ['Car'], route: "car" },
    { id: "1030", name: 'Bike Accessories', value: ['Bike Accessories'], route: "Bike Accessories" },
    { id: "1040", name: 'Car Accessories', value: ['Car Accessories'], route: "Car Accessories" }
  ];
  furnitures: Array<any> = [
    { id: "2010", name: 'Curtains & Blinds', value: ['Curtains & Blinds'], route: "Curtains & Blinds" },
    { id: "2020", name: 'Rugs & Carpets', value: ['Rugs & Carpets'], route: "Rugs & Carpets" },
    { id: "2030", name: 'Mirrors', value: ['Mirrors'], route: "Mirrors" },
    { id: "2040", name: 'Bedroom Furniture', value: ['Bedroom Furniture'], route: "Bedroom Furniture" },
    { id: "2050", name: 'Gaming Furniture', value: ['Gaming Furniture'], route: "Gaming Furniture" },
    { id: "2060", name: 'Kitchen Furniture', value: ['Kitchen Furniture'], route: "Kitchen Furniture" },
  ];
  jewelery: Array<any> = [
    { id: "5010", name: 'Earrings', value: ['Earrings'], route: "Earrings" },
    { id: "5020", name: 'Necklaces', value: ['Necklaces'], route: "Necklaces" },
    { id: "5030", name: 'Rings', value: ['Rings'], route: "Rings" },
    { id: "5040", name: 'Bracelets', value: ['Bracelets '], route: "Bracelets" },
    { id: "5050", name: 'Pearls', value: ['Pearls '], route: "Pearls" }
  ];
  Watches: Array<any> = [
    { id: "4010", name: 'Men watch', value: ['Men watch'], route: "Men watch" },
    { id: "4020", name: 'Women watch', value: ['Women watch'], route: "Women watch" },
    { id: "4030", name: 'Smart watch', value: ['Smart watch'], route: "Smart watch" }
  ];
  Grossery: Array<any> = [
    { id: "6010", name: 'Beverages', value: ['Beverages'], route: "Beverages" },
    { id: "6020", name: 'Packed Food', value: ['Packed Food'], route: "Packed Food" },
    { id: "6030", name: 'Snack Food', value: ['Snack Food'], route: "Snack Food" },
    { id: "6040", name: 'Choclates', value: ['Choclates '], route: "Choclates" },
    { id: "6050", name: 'Cooking Essentials', value: ['Cooking Essentials '], route: "Cooking Essentials" },
    { id: "6060", name: 'Pet Essentials', value: ['Pet Essentials'], route: "Pet Essentials" },
  ];
  Sports: Array<any> = [
    { id: "7010", name: 'Camping & Hiking', value: ['Camping & Hiking'], route: "Camping & Hiking" },
    { id: "7020", name: 'Team Sports', value: ['Team Sports'], route: "Team Sports" },
    { id: "7030", name: 'Racquet Sports', value: ['Racquet Sports'], route: "Racquet Sports" },
    { id: "7040", name: 'Cardio Training', value: ['Cardio Training'], route: "Cardio Training" },
    { id: "7050", name: 'Sport Nutritions', value: ['Sport Nutritions '], route: "Sport Nutritions" }
  ];
  ngOnInit(): void {
  }
  displayValue() {
    this.categoryid = "30"
    this.category = "electronics"
    this.values = this.subcategory
    console.log('values', this.category, this.values)
  }
  vehicles() {
    this.values = this.vehicle
    this.categoryid = "10"
    this.category = "vehicles"
    console.log('values', this.values)
  }
  furniture() {
    this.values = this.furnitures
    this.categoryid = "20"
    this.category = "furniture"
    console.log('values', this.values)
  }
  jewelry() {
    this.categoryid = "50"
    this.values = this.jewelery
    this.category = "jewelry"
    console.log('values', this.values)
  }
  watches() {
    this.categoryid = "40"
    this.values = this.Watches
    this.category = "watches"
    console.log('values', this.values)
  }
  grossery(){
    this.categoryid = "60"
    this.values = this.Grossery
    this.category = "grossery"
    console.log('values', this.values)
  }
  sports(){
    this.categoryid = "70"
    this.values = this.Sports
    this.category = "sports"
    console.log('values', this.values)  
  }
}
