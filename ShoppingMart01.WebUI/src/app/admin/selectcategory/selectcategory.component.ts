import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selectcategory',
  templateUrl: './selectcategory.component.html',
  styleUrls: ['./selectcategory.component.css']
})
export class SelectcategoryComponent implements OnInit {
  values: any[] = []

  constructor() { }

  subcategory: Array<any> = [
    { name: 'mobile', value: ['Mobile'] },
    { name: 'mobile', value: ['Tablet'] },
    { name: 'mobile', value: ['Laptop'] }
  ];
  vehicle: Array<any> = [
    { value: ['Car'] },
    { value: ['Bike'] },
    { value: ['Bus'] },
    { value: ['Truck'] },
    { value: ['Jeep'] },
    { value: ['Other'] },
  ];
  furnitures: Array<any> = [
    { value: ['Gold'] },
    { value: ['Silver'] },
    { value: ['Diamond'] },
    { value: ['Other'] }
  ];
  properties: Array<any> = [
    { value: ['For Sale'] },
    { value: ['For Rent'] }
  ];
  ngOnInit(): void {
  }
  displayValue() {
    this.values = this.subcategory.map(x => x.value)
    console.log('values', this.values)
  }
  vehicles() {
    this.values = this.vehicle.map(x => x.value)
    console.log('values', this.values)
  }
  furniture() {
    this.values = this.furnitures.map(x => x.value)
    console.log('values', this.values)
  }
  property() {
    this.values = this.properties.map(x => x.value)
    console.log('values', this.values)
  }
}
