import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    cartSubject = new Subject<any>();


    constructor(private http: HttpClient) { }
  
    private url = 'http://localhost:3000/auth/login'
    userlogin(credentials: any) {
        console.log(credentials);
        
        const request = {
            email: credentials.email,
            password: credentials.password
        }

        return this.http.post<any>(`http://localhost:3000/auth/login`, request)
    }


}