import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/Classes/category';
import { product } from 'src/app/Classes/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  subscription = new Subscription();
  GetCategoryId: number;
  SubCategoryId?: number;
  List: product[] = [];

  constructor (
    private route: ActivatedRoute,
    private prodList: Category,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.route.paramMap
      .subscribe(params => {
        this.GetCategoryId = Number(params.get('id'));
        this.SubCategoryId = Number(params.get('sid'));
      });

    let str = this.router.url;
    let fetchedUrl = str.substr(str.lastIndexOf("?") + 1);

    if (str.includes('?')) {
      this.subscription.add(this.GetFilteredProductList(fetchedUrl));
    }
    else {
      this.subscription.add(this.GetProductList());
    }
  }

  GetProductList() {
    return this.prodList.GetProdByCategoryId(this.GetCategoryId, this.SubCategoryId)
      .subscribe(products => {
        this.List = products;
      });
  }

  GetFilteredProductList(fetchedUrl) {
    this.prodList.GetProductData(fetchedUrl, this.GetCategoryId, this.SubCategoryId)
      .subscribe(products => {
        this.List = products;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
