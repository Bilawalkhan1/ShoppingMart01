import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoriesListViewComponent } from './components/categories-list-view/categories-list-view.component';
import { CategoryComponent } from './components/category/category.component';
import { HomePageSliderComponent } from './components/home-page-slider/home-page-slider.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductRelatedCarouselComponent } from './components/product-related-carousel/product-related-carousel.component';
import { ProductComponent } from './components/product/product.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { UserControlComponent } from './components/user-control/user-control.component';
import { AuthGuardService } from './Services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupFormComponent},
  {path: 'cart', loadChildren:()=> import('./components/cart/cart.module').then(x=> x.CartModule)},
  { path: "product/:name" , component: ProductComponent },
  { path: "login", component: LoginComponent,  data: { breadcrumb: 'Login'} },
  { path: "signup", component: SignupFormComponent},
  { path: "cart", component: CartComponent,  data: { breadcrumb: 'Cart'} },
  { path: "product/:name" , component: ProductComponent,  data: { breadcrumb: 'Product'}  },
  { path: "addproduct" , component: AddproductsComponent },
  { path: "getcategory/:category/:subcategory" , component: CategoryComponent },
  { path: "User", component: UserControlComponent},
  { path: "ProductRelated-Carousel", component:ProductRelatedCarouselComponent  },
  { path: "categoryListView", component: CategoriesListViewComponent },
  { path: "productList", component: ProductListComponent },
  { path: "homePageSlider", component: HomePageSliderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 

  exports: [RouterModule]
})
export class AppRoutingModule { }
