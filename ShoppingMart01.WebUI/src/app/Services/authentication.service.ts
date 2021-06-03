import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    cartSubject = new Subject<any>();
    userinfo: BehaviorSubject<any> = new BehaviorSubject(null);
    jwthelper = new JwtHelperService();

    private readonly JWT_TOKEN = 'JWT_TOKEN';

    constructor(private http: HttpClient) { }
    private url = 'https://localhost:44309/api/Identity/login'
    userlogin(userpayload: any) {
        // console.log(userpayload)
        // const accesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJzdWIiOjIsImlhdCI6MTYwNDMwOTc0OSwiZXhwIjoxNjA0MzA5ODA5fQ.jHez9kegJ7GT1AO5A2fQp6Dg9A6PBmeiDW1YPaCQoYs";
        // const refreshtoken = 'dummy';
        // localStorage.setItem('access_token', accesstoken)
        // localStorage.setItem('refresh_token', refreshtoken)

        // const decrypteduser = this.jwthelper.decodeToken(accesstoken)
        // console.log(decrypteduser)

        // const data = {
        //     refresh_token: refreshtoken,
        //     access_token: accesstoken,
        //     username: decrypteduser.username,
        //     userid: decrypteduser.sub,
        //     tokenexpiration: decrypteduser.exp
        // }
        // this.userinfo.next(data)

        return this.http.post(this.url, userpayload)

    }
}