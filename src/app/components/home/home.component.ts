import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/product-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchText: any
  constructor( private productDetails : ProductDetailsService ) { }

  ngOnInit(): void {
  }
  images = [
    { img: "/assets/bikes.jfif" },
    { img: "/assets/car.jfif" },
    { img: "/assets/bike.jfif" },
    { img: "/assets/fur.jfif" },
    { img: "/assets/jewel.jfif" },
    { img: "/assets/furn.jfif" },
    { img: "/assets/jewelery.jfif" },
    { img: "/assets/furniture.jfif" },
    { img: "/assets/cars.jfif" },
  ];
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 3,
    "dots": true,
    "infinite": true
  };
  products = [
    {
      blogImg: "/assets/bikes.jfif",
      Name: 'Electric Bicycle',
      Price: '$500',
      desp: 'An electric bicycle, also known as an e-bike, is a bicycle with an integrated electric motor.',
    },
    {
      blogImg: "/assets/car.jfif",
      Name: 'Stellantis',
      Price: '$10000',
      desp: 'Lucky Motors is Bringing the World’s fourth Largest Car Manufacturers and tothe Pakistan ..',
    },
    {
      blogImg: "/assets/furniture.jfif",
      Name: 'Furniture',
      Price: '$1000',
      desp: "From lahore to Torento sialkot is the fourth Largest furniture Manufacturers and tothe Pakistan .",
    },
    {
      blogImg: "/assets/fur.jfif",
      Name: 'Breslet',
      Price: '$50',
      desp: '925 sterling silver ring trend creative heavy industry opening adjustable personality.',
    },
    {
      blogImg: "/assets/car.jfif",
      Name: 'Stellantis',
      Price: '$10000',
      desp: 'Lucky Motors is Bringing the World’s 4th Largest Car Manufacturer to Pakistan ..',
    },
    {
      blogImg: "/assets/furniture.jfif",
      Name: 'Sitting Sofas',
      Price: '$1000',
      desp: "From lahore to Torento sialkot is the fourth Largest furniture Manufacturers over the Pakistan .",
    },
    {
      blogImg: "/assets/fur.jfif",
      Name: 'Stellantis',
      Price: '$50',
      desp: '925 sterling silver ring trend creative industry chain opening adjustable personality jewe .',
    },
    {
      blogImg: "/assets/bikes.jfif",
      Name: 'Electric Bicycle',
      Price: '$500',
      desp: 'An electric bicycle, also known as an e-bike or bicycle with integrated electric propulsion.',
    },

  ]
 
  sendProductDetails(blog:object){
  this.productDetails.sendProduct(blog); 
  }

}
