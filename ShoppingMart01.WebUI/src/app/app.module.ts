import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './Services/_interceptor/auth-interceptor.service';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { FilterPipe } from './Classes/filter.pipe';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './Index/index/index.component';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './Index/header/header.component';
import { FooterComponent } from './Index/footer/footer.component';
import { MainViewComponent } from './Index/MainView/MainView.component';
import { TopNavBarComponent } from './Index/top-nav-bar/top-nav-bar.component';
import { SearchComponent } from './Index/search/search.component';
import { HomePageSliderComponent } from './Index/home-page-slider/home-page-slider.component';
import { ProductSliderComponent } from './Index/product-slider/product-slider.component';
import { ProductBrowsingModule } from './product-browsing/product-browsing.module';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    MainViewComponent,
    TopNavBarComponent,
    SearchComponent,
    HomePageSliderComponent,
    ProductSliderComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    SocialLoginModule,
    SharedModule,  
    ProductBrowsingModule  
  ],
  exports: [
    RouterModule,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '603585893353-feraas49b2gs5q14nam3ie6q3tg9iq01.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
