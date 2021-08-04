import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-slider',
  templateUrl: './product-slider.component.html',
  styleUrls: ['./product-slider.component.css']
})
export class ProductSliderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  images = [
    { img: '/assets/bikes.jfif' },
    { img: '/assets/car.jfif' },
    { img: '/assets/bike.jfif' },
    { img: '/assets/fur.jfif' },
    { img: '/assets/jewel.jfif' },
    { img: '/assets/furn.jfif' },
    { img: '/assets/jewelery.jfif' },
    { img: '/assets/furniture.jfif' },
    { img: '/assets/cars.jfif' },
  ];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 2000,
    autoplay: true,
    infinite: true,
    arrows: true
  }
  slideConfig1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplaySpeed: 1000,
    autoplay: true,
    infinite: true,
  }
}
