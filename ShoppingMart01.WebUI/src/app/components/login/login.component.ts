import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    message = ''
    socialUser: SocialUser;
    isLoggedin = true;
    form: FormGroup;

    constructor(private router: Router,
        private as: AuthenticationService,
        private socialAuthService: SocialAuthService,
        private fb: FormBuilder,
        private http: HttpClient) {

        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.socialAuthService.authState.subscribe((user) => {
            this.socialUser = user;
            //   this.isLoggedin = (user != null);
            console.log(this.socialUser);
        });
    }

    loginWithGoogle() {
        this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(resp=>{

            console.log("resp ", resp)
            localStorage.setItem('token', resp.idToken)
        })
        this.router.navigateByUrl('/User')
    }


    signup() {
        this.router.navigateByUrl('/signup')
    }

    loginUser() {

        const credentials = {
            email: this.form.value.email,
            password: this.form.value.password
        }
        this.as.userlogin(credentials).toPromise().then(resp => {
            this.message = ''
            console.log("resp ", resp)
            localStorage.setItem('token', resp.access_token)
            this.router.navigateByUrl('/User')
        }).catch(err =>
            this.message = "Invalid Email or Password")

    }
}