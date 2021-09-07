import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/shared/models/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyword = 'name';
  item
  showSearchContainer = false;
  searchArray: Array<any> = [];
  searchText = '';
  searchField: FormControl;
  modelData: any;
  searchValue: string[] = [];
  subscription = new Subscription();
  constructor(private http: HttpClient,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.subscription.add(
      this.searchField.valueChanges
        .subscribe(term => {
          this.searchArray = []
          this.searchValue.push(term);
        })
    )
    this.http.get<any>(`http://localhost:3000/brands`)
      .subscribe(data => {
        data.forEach(element => {
          this.searchArray.push(element.name)
        });
      });
  }
  images = [
    { img: 'assets/slider-home/car_slider_01.png' },
    { img: 'assets/slider-home/mobile_slider-01.png' },
    { img: 'assets/slider-home/furniture-01.png' },
    { img: 'assets/slider-home/kitchen_01.gif' },
    { img: 'assets/slider-home/kitchen_02.png' }
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 2000,
    autoplay: true,
    infinite: true,
    arrows: true
  }

  onSearchChange(searchValue) {
    this.showSearchContainer = true
  }

  selectValue(item) {
    console.log('field', this.searchField)
    this.productService.getList(item).subscribe((filterData: any) => {
      console.log('data', filterData)
      this.modelData = filterData;
      this.sendData();
      this.router.navigateByUrl('/ProductBrowsing/getcategory')
    })
  }

  sendData() {
    this.productService.sendProduct(this.modelData)
  }

  selectEvent(item) {
    this.searchField = item
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }

  onFocused(e) {
    // do something when input is focused
  }
}

