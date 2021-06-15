import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { product } from 'src/app/Classes/product';
import { ProductDetailsService } from 'src/app/Services/product-details.service';
import { ProductService } from 'src/app/Services/product.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  dataproduct: any
  products: product[] = [];
  public covertPhotoUrl(photoUrl) {
    return `data:image/jpeg;base64,${photoUrl}`
  }

  ngOnInit(): void {
    this.category = this.route.snapshot.queryParamMap.get('category')
    console.log(this.category)


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
    slidesToScroll: 3,
    dots: true,
    infinite: true,
  };

  filteredProducts: product[] = [];
  categories$: Observable<any>;
  category: any;
  products$: Observable<any>;


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private productDetails: ProductDetailsService,
    private router: Router) {
    this.filteredProducts = [];
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    //Shows Categories in View
    this.categories$ = productService.getProdByCategory(this.category);
    route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
    });


    this.productService.getProdByCategory(this.category).subscribe(products => {
      this.products = products;

      //Setting the filtered Products Array
      this.filteredProducts = this.products.filter(p => p.category === this.category)
      console.log('filteres', this.filteredProducts); // Console.log FilteredProducts Array
    });

  }

}
