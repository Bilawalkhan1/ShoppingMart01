import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Input() CategoryId : number
  @Input() SubCategoryId? : number

  constructor() { }

  ngOnInit(): void {
  }

}
