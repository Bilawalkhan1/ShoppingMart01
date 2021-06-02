import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../Classes/user';
import { HttpClient } from '@angular/common/http';
import { tap, mapTo, catchError } from 'rxjs/operators';
import { Token } from '@angular/compiler/src/ml_parser/lexer';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private url = 'api/user/login';
 
  constructor(private http : HttpClient) {
  }

  login(user:{userEmail : string, password : string}): Observable<boolean>{
    const data = this.http.post(`${this.url}`,user) 
    if(data){
    return this.http.post(`${this.url}`,user)
    .pipe(
      tap( (token: any) => this.doLoginUser(user.userEmail, token) )
    )
  }else{
    return data
  }
  }

  doLoginUser(userEmail:string , token : Token){
    localStorage.setItem("user"  , JSON.stringify( token ) )

  }

  getToken(){
    return localStorage.getItem("user")
  }
  // login(data: any): Observable<any> {
  //   console.log('response');
  //   return this.http.post(`${this.url}`, data);
  // }

  // private productsUrl = 'api/user';
  // 

  

  //  login(userEmail : string, password : string){
  //    debugger
  //   return this.http.post<any>(`${this.url}`, { userEmail, password })
  //     .subscribe( x =>{
  //       localStorage.setItem("Token", x)
  //       debugger;
  //       this.currUserSubject.next(x)
  //       console.log(x)
  //     })
  //  }

}

//login
// logout
//islogin
//getjwttoken
