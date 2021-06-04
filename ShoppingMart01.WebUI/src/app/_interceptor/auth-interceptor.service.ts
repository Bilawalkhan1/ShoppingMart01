import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

  constructor( private auth : AuthenticationService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    console.log(req.body)
    return next.handle(req)
  }

    addToken(req: HttpRequest<any>, token: any){
      return req.clone({
        setHeaders: {
          Authorization : `Bearer ${token}`
        }
      })
    }
      
}


