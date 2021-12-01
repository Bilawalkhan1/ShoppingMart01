import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, pairwise } from 'rxjs/operators';
import { User } from '../Classes/user';



@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    cartSubject = new Subject<any>();
    public logUserDetails: boolean = false

    public currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(private http: HttpClient, private router: Router) {
        this.currentUserSubject = new BehaviorSubject((localStorage.getItem('token')));
        this.currentUser = this.currentUserSubject.asObservable();

    }

    userlogin(credentials: any) {
        const request = {
            email: credentials.email,
            password: credentials.password
        }
        return this.http.post<any>(`http://localhost:8000/auth/login`, request)
            .pipe(map(user => {
                if (user && user.access_token) {
                    localStorage.setItem('token', user.access_token)
                    this.logUserDetails = true
                }
                return user
            }))
    }

    setUserDetails(userEmail) {
        return this.http.get<any>(`http://localhost:3000/users?email=` + userEmail)
            .pipe(map(userDetails => {
                this.logUserDetails = userDetails
                return userDetails
            }))
    }


    getUserData() {
        if (localStorage.getItem('token') !== null) {
            let user = JSON.parse(localStorage.getItem('user'))
            if (user !== null) {
                return user[0].role
            }
        }
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    filterProducts() {
        return this.http.get('http://localhost:3000/Product')
    }

    userLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.currentUserSubject.next(null);

    }
}