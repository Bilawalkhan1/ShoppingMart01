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
    public currentUser : Observable<any>;

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
        //    console.log( this.currentUserSubject.next(user.token) )
            return user
        }))
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    userLogout(){
    localStorage.removeItem('token');
    this.currentUserSubject.next(null);
    }
}