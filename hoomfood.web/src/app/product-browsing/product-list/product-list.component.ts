import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/Classes/product';
import { ProductService } from 'src/app/shared/models/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() getProductList: product[] = []
  constructor(private productService: ProductService,private router: Router) { }

  ngOnInit(): void {
  }
  
  public covertPhotoUrl(photoUrl) {
    return `data:image/jpeg;base64,${photoUrl}`
  }

  slideConfig2 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: false
  };
  
  public sendProductDetails(product: any) {   
    this.productService.sendProduct(product);
    this.router.navigate([this.router.url+'-'+'ProductBrowsing/product',product.Product_Name])
  }

}
