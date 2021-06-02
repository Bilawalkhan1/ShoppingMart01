import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor( private auth : AuthenticationService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const tokenId = localStorage.getItem("user");

    // if(this.auth.getToken()){
    //   req  = this.addToken(req , this.auth.getToken())
    // }
    return next.handle(req)
  }

    addToken(req: HttpRequest<any>, token: any){
      return req.clone({
        setHeaders: {
          Authorization : `Bearer ${token}`
        }
      })
    }
      // if(tokenId){
      //   const Api_key = '21324';
      //   return next.handle(req.clone({ setHeaders : {Api_key} }))
      //   // const cloned = req.clone({
      //   //  headers : req.headers.set("Authorization", "Bearer " +tokenId)
      //   // });
      //   // return next.handle(cloned);
      // }
      //   else
      //   {
      //     return next.handle(req)
      //   }
}


