import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { SignupFormComponent } from '../signup-form/signup-form.component';
import { DOCUMENT } from '@angular/common';
import { AuthguardService } from 'src/app/Services/authguard.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    message = ''
    register: boolean
    socialUser: SocialUser;
    isLoggedin = true;
    loading = false;
    form: FormGroup;
    submitted: boolean
    returnUrl: string;
    notify: any;
    redirectUser: any;

    constructor (private router: Router,
        private as: AuthenticationService,
        private socialAuthService: SocialAuthService,
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private modelservice: NgbModal,
        private http: HttpClient,
        private authguardService: AuthguardService) {

        this.form = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    get f() {
        return this.form.controls;
    }

    ngOnInit(): void {
        this.register = false;
        this.socialAuthService.authState.subscribe((user) => {
            this.socialUser = user;
            //   this.isLoggedin = (user != null);
            console.log(this.socialUser);
        });
    }

    loginWithGoogle() {
        this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(resp => {

            console.log("resp ", resp)
            localStorage.setItem('token', resp.idToken)
        })
        this.router.navigateByUrl('/User')
    }

    signup() {
        this.modelservice.open(SignupFormComponent)
    }

    loginUser() {
        this.submitted = true;
        const credentials = {
            email: this.form.value.email,
            password: this.form.value.password
        }
        this.loading = true
        this.as.userlogin(credentials).toPromise().then(resp => {
            this.message = ''
            this.register = true
            // localStorage.setItem('token', resp.access_token);
            if (resp.access_token) {
                this.as.setUserDetails(credentials.email).toPromise().then(resp => {
                    localStorage.setItem('user', JSON.stringify(resp))
                    //  this.redirectUser(resp[0].role)
                })
            }
            if (this.authguardService.returnUrl != null) {
                this.router.navigateByUrl(`/${this.authguardService.returnUrl}`)
                this.authguardService.returnUrl = null
            }
            this.modelservice.dismissAll()
        }).catch(
            err => this.message = "Invalid Email or Password")
        this.loading = false
    }

    close() {
        this.modelservice.dismissAll()
    }

    redirectUserToLink(userRole) {
        if (userRole == 'admin') {
            this.router.navigate(['/']);
        } else if (userRole == 'user') {
            this.router.navigate(['/cart']);
        } else if (userRole == '' || userRole == undefined) {
            this.router.navigate([''])
        }
    }
}