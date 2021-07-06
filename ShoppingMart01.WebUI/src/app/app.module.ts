import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { ProductComponent } from './components/product/product.component';
import { UserControlComponent } from './components/user-control/user-control.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './Services/_interceptor/auth-interceptor.service';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { AddproductsComponent } from './components/addproducts/addproducts.component';
import { CategoryComponent } from './components/category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxModelModule } from 'ngx-model';
import { MaterialModule } from './material.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { NavbarModule, WavesModule, ButtonsModule, IconsModule } from 'angular-bootstrap-md'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    SignupFormComponent,
    ProductComponent,
    UserControlComponent,
    AddproductsComponent,
    CategoryComponent,
    FilterPipe,
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    SlickCarouselModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    NavbarModule,
    IconsModule,
    ButtonsModule,
    WavesModule,
    ReactiveFormsModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    NgxModelModule,
    MatTabsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MaterialModule

  ],
  exports:[
    RouterModule,
      MatTabsModule,
      MatSidenavModule,
      MatToolbarModule,
      MatIconModule,
      MatButtonModule
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
