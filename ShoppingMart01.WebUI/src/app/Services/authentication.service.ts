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
  
    private url = 'https://localhost:44309/api/Identity/login'
    userlogin(credentials: any) {

        const request = {
            Email: credentials.email,
            password: credentials.password
        }

        return this.http.post<any>(`https://localhost:44309/api/Identity/login`, request)
    }


}