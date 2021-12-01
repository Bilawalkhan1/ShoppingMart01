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
import { FooterComponent } from './Index/footer/footer.component';
import { MainViewComponent } from './Index/MainView/MainView.component';
import { ProductSliderComponent } from './Index/product-slider/product-slider.component';
import { ProductBrowsingModule } from './product-browsing/product-browsing.module';
import { NavBarAfterComponent } from './Index/nav-bar-after/nav-bar-after.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ModelViewMobileComponent } from './Index/model-view-mobile/model-view-mobile.component';
import { BottomnavigationComponent } from './Index/bottomnavigation/bottomnavigation.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    IndexComponent,
    FooterComponent, 
    MainViewComponent,
    ProductSliderComponent,
    NavBarAfterComponent,
    ModelViewMobileComponent,
    BottomnavigationComponent,
  ],
  imports: [
    AppRoutingModule,
    AutocompleteLibModule,
    CommonModule,
    HttpClientModule,
    BrowserModule,
    SocialLoginModule,
    SharedModule,  
    ProductBrowsingModule,
    SocketIoModule
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
