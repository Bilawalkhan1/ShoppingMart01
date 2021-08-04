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
    { img: 'https://source.unsplash.com/LAaSoL0LrYs/1920x1080' },
    { img: 'https://source.unsplash.com/bF2vsubyHcQ/1920x1080' },
    { img: 'https://source.unsplash.com/szFUQoyvrxM/1920x1080' }
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 5000,
    autoplay: true,
    infinite: true,
    arrows: true
  }
}
