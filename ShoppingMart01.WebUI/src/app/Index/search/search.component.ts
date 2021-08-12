import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, toArray } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  url: string = 'https://fakerapi.it/api/v1/persons?_quantity=50';
  searchArray: Array<any> = [];
  searchText: any;
  searchField: FormControl;
  searchValue: string[] = [];
  subscription = new Subscription();
  showSearchContainer = false;

  constructor (private http: HttpClient) { }


  ngOnInit(): void {
    this.searchField = new FormControl();
    this.subscription.add(
      this.searchField.valueChanges
        .pipe(
          debounceTime(1000),
          distinctUntilChanged()
        )
        .subscribe(term => {
          this.searchValue.push(term);
          this.getHttpSearchResult();
        }
        )
    )
  }

  getHttpSearchResult() {
    this.http.get<any>(`http://localhost:3000/Product`)
      // .pipe(
      //   map(u => u.data)
      // )
      .subscribe(data => {
        // this.ResponseData = data.map(u => u.firstname)       
        console.log(data)       
        data.forEach(element => {
          this.searchArray.push(element.Product_Name);
        });
      });
  }

  toggleSearchContainer() {
    this.showSearchContainer = !this.showSearchContainer;
  }

  selectValue(data) {
    this.searchField.patchValue(data);  
    this.showSearchContainer = false;
  }

  getSearchResult() {
    console.log('search ', this.searchField.value);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

