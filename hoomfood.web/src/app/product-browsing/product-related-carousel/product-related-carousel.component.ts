import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/Classes/product';
import { ProductService } from 'src/app/shared/models/product.service';
declare var $: any;

@Component({
  selector: 'app-product-related-carousel',
  templateUrl: './product-related-carousel.component.html',
  styleUrls: ['./product-related-carousel.component.css']
})
export class ProductRelatedCarouselComponent implements OnInit {
  @Input() productX: product[] = []
  fetchedUrl = ''
  str = this.router.url;
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    'responsive': [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  }
  slideConfig1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  }
  constructor (private productService: ProductService, private router: Router) {
    this.fetchedUrl = this.str.split('-')[0];
  }

  ngOnInit(): void {
  }
  public covertPhotoUrl(photoUrl) {
    return `data:image/jpeg;base64,${photoUrl}`
  }

  public sendProductDetails(product: any) {
    this.productService.sendProduct(product);
    let test = this.str.includes('-')
    if (test) {
      this.router.navigate([this.fetchedUrl + '-' + 'ProductBrowsing/product', product.Product_Name])
    }
    else {
      this.router.navigate(['ProductBrowsing/product', product.Product_Name], { replaceUrl: true });
    }
  }
}
