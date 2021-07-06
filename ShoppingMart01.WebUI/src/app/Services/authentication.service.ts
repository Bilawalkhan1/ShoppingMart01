import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    cartSubject = new Subject<any>();

    public currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    logUserDetails = '';

    constructor(private http: HttpClient) {
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
                }
                //  window.location.href = this.prevUrl
                return user
            }))
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    setUserDetails(userEmail) {
        return this.http.get<any>(`http://localhost:3000/users?email=` + userEmail)
            .pipe(map(userDetails => {
                this.logUserDetails = userDetails
                console.log('logUserDetails', this.logUserDetails)
                return userDetails
            }))
    }

    filterProducts(){
        return this.http.get('http://localhost:3000/Product')
    }

    userLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user')
        this.currentUserSubject.next(null);
    }
}