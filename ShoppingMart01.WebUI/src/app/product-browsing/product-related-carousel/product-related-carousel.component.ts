import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/Classes/product';
declare var $: any;

@Component({
  selector: 'app-product-related-carousel',
  templateUrl: './product-related-carousel.component.html',
  styleUrls: ['./product-related-carousel.component.css']
})
export class ProductRelatedCarouselComponent implements OnInit {
  @Input()  productX:  product[] = []
  slidePosition
  slides
  totalSlides
  constructor () { }

  ngOnInit(): void {
  }
  public covertPhotoUrl(photoUrl) {
    return `data:image/jpeg;base64,${photoUrl}`
  }



  ngAfterViewInit(): void {   
    this.slidePosition = 0;
    this.slides = document.getElementsByClassName("carousel__item");
    this.totalSlides = this.slides.length;
    setTimeout(() => {
     console.log(this.productX) 
    }, 1000);
  }


  moveToNextSlide() {
    if (this.slidePosition === this.totalSlides - 1) {
      this.slidePosition = 0;
    } else {
      this.slidePosition++;
    }
    this.updateSlidesPosition();
  }

  moveToPrevSlide() {
    if (this.slidePosition === 0) {
      // totalSlides -1, if you wan't infinite carousel effect to both ways
      this.slidePosition = 0;
    } else {
      this.slidePosition--;
    }
    this.updateSlidesPosition();
  }

  updateSlidesPosition() {
    for (let slide of this.slides) {
      slide.classList.remove("carousel__item--visible");
      slide.classList.add("carousel__item--hidden");
    }
    this.slides[this.slidePosition].classList.add("carousel__item--visible");
  }
  
}
