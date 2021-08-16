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
    { id: "3010", name: 'Mobile', value: ['Mobile'], route: "mobile" },
    { id: "3020", name: 'Tablet', value: ['Tablet'], route: "tablet" },
    { id: "3030", name: 'Laptop', value: ['Laptop'], route: "laptop" }
  ];
  vehicle: Array<any> = [
    { id: "1010", name: 'Bike', value: ['Bike'], route: "bike" },
    { id: "1020", name: 'Car', value: ['Car'], route: "car" },
    { id: "1030", name: 'Bus', value: ['Bus'], route: "bus" },
    { id: "1040", name: 'Truck', value: ['Truck'], route: "truck" },
    { id: "1050", name: 'Jeep', value: ['Jeep'], route: "jeep" }
  ];
  furnitures: Array<any> = [
    { id: "2010", name: 'Curtain', value: ['Curtain'], route: "curtain" },
    { id: "2020", name: 'Wood furniture', value: ['Wood furniture'], route: "woodfurniture" },
    { id: "2030", name: 'Sofa set', value: ['Sofa set'], route: "sofaset" },
    { id: "2040", name: 'Blinds', value: ['Blinds'], route: "blind" },
  ];
  properties: Array<any> = [
    { id: "4010", name: 'For Sale', value: ['For Sale'], route: "forsale" },
    { id: "4020", name: 'For Rent', value: ['For Rent'], route: "forrent" }
  ];
  jewelery: Array<any> = [
    { id: "5010", name: 'Gold', value: ['Gold'], route: "gold" },
    { id: "5020", name: 'Diamond', value: ['Diamond'], route: "diamond" },
    { id: "5030", name: 'Silver', value: ['Silver'], route: "silver" },
    { id: "5040", name: 'Antique', value: ['Antique '], route: "antique" },
    { id: "5050", name: 'Other', value: ['Other '], route: "other" }
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
  property() {
    this.values = this.properties
    this.categoryid = "40"
    this.category = "property"
    console.log('values', this.values)
  }
  jewelry() {
    this.categoryid = "50"
    this.values = this.jewelery
    this.category = "jewelry"
    console.log('values', this.values)
  }
}
