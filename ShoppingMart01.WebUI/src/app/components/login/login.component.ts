import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUserData = {
email: '',
password: ''
}

form: FormGroup;
constructor(private router: Router, private as: AuthenticationService, private fb: FormBuilder, private http: HttpClient) {
this.form = this.fb.group({
email: ['', Validators.required],
password: ['', Validators.required]
});
}

get f() {
return this.form.controls;
}

ngOnInit(): void {
}

signup() {
this.router.navigateByUrl('/signup')
}

loginUser() {
this.as.userlogin(this.form.value)
alert('user login successfully')
}
}