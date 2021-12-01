import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/Classes/category';
import { product } from 'src/app/Classes/product';
import { ProductService } from 'src/app/shared/models/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  GetCategoryId: number;
  SubCategoryId?: number;
  List: product[] = [];
  subscription = new Subscription();

  constructor (private route: ActivatedRoute, private prodList: Category, private router: Router,
    private productService: ProductService) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.GetCategoryId = Number(params.get('id'));
        this.SubCategoryId = Number(params.get('sid'));
      });
      this.subscription.add( this.GetProductList());
   
  }

  GetProductList() {
    return this.prodList.GetProdByCategoryId(this.GetCategoryId, this.SubCategoryId)
      .subscribe(products => {
        this.List = products;
      });
  }

  FilteredDataReturnList(event) {
    this.productService.getList(event)
    .subscribe((x:product[])=>this.List=x)
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
