import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/shared/models/product.service';
import { ModelViewMobileComponent } from '../model-view-mobile/model-view-mobile.component';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  category: string = ''
  filterProducts: any;
  data: any

  constructor(
    private productService: ProductService,
    private modelService: NgbModal) { }

  ngOnInit(): void { }

  openModelVehicle(category) {
    this.category = category
    this.productService.getNavItems(this.category).subscribe(
      resp => {
        this.data = resp
        this.filterProducts = this.data.map(x => {
          if (x.displayName=this.category) {
            console.log('category',this.category)
            const filterArray = x.children
            this.productService.categorydata = filterArray
          }
        })
        this.modelService.open(ModelViewMobileComponent)
      }
    )
  }

  listItems: Array<any> = [
    {
      id: 1,
      name: "Vehicle",
      img: 'assets/ca.jpg'
    },
    {
      id: 1,
      name: "Furniture",
      img: 'assets/chair.png'
    },
    {
      id: 1,
      name: "Electronics",
      img: 'assets/elec.jpg'
    },
    {
      id: 1,
      name: "Jewelry",
      img: 'assets/ringg.png'
    },
    {
      id: 1,
      name: "Grossery",
      img: 'assets/groccery.jpg'
    },
    {
      id: 1,
      name: "HomeDecor",
      img: 'assets/decor.png'
    },
    {
      id: 1,
      name: "Mobiles",
      img: 'assets/mobil.png'
    },
    {
      id: 1,
      name: "Watches",
      img: 'assets/watch.png'
    },
    {
      id: 1,
      name: "Sports",
      img: 'assets/football.jpg'
    },

  ]
}
