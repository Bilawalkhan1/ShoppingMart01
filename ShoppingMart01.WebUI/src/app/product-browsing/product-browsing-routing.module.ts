import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesListViewComponent } from '../shared/components/categories-list-view/categories-list-view.component';
import { CategoryComponent } from './category/category.component';
import { ProductBrowsingComponent } from './product-browsing.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRelatedCarouselComponent } from './product-related-carousel/product-related-carousel.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: ProductBrowsingComponent,
    children:[
      { path: "productList", component: ProductListComponent },
      { path: "getcategory" , component: CategoryComponent },
      { path: "product/:name" , component: ProductComponent},
      { path: "ProductRelated-Carousel", component:ProductRelatedCarouselComponent  },
      { path: "categoryListView", component: CategoriesListViewComponent },
      // { path: "getcategory/:category/:subcategory" , component: CategoryComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductBrowsingRoutingModule { }
