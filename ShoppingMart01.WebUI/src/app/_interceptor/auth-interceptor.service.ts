import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Services/authentication.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
   token: any
  constructor( private auth : AuthenticationService ) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currentUser = this.auth.currentUserValue;
    if (currentUser) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${currentUser}`
            }
        });
    }

    return next.handle(request);
      
  }
}