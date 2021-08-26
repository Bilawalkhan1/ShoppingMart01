import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-slider',
  templateUrl: './category-slider.component.html',
  styleUrls: ['./category-slider.component.css']
})
export class CategorySliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    { img: 'assets/slider-home/car_slider_01.png'},    
  ]; 
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true  
  }
}
