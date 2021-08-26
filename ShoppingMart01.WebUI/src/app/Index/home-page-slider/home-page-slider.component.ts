import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page-slider',
  templateUrl: './home-page-slider.component.html',
  styleUrls: ['./home-page-slider.component.css']
})
export class HomePageSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [
    { img: 'assets/slider-home/car_slider_01.png'},
    { img: 'assets/slider-home/mobile_slider-01.png'},
    { img: 'assets/slider-home/furniture-01.png'},
    { img: 'assets/slider-home/kitchen_01.gif'},
    // { img: 'assets/slider-home/mobile_slider-02.gif'},
    { img: 'assets/slider-home/kitchen_02.png'}
  ]; 
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 2000,
    autoplay: true,
    infinite: true,
    arrows: false
  }
}
