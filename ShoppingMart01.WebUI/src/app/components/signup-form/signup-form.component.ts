import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  
  constructor(private fb: FormBuilder, private http: HttpClient, private router:Router) { }
  private url = 'https://localhost:44309/api/Identity/register'
  ngOnInit(): void { }

  signUp = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(20)]],
    // lastName: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    // address: this.fb.group({
    //   province: [''],
    //   city: [''],
    // }),
    password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
  });
  lettersOnly(event: any) {
    var charCode = event.keyCode;
    if (
      (charCode > 64 && charCode < 91) ||
      (charCode > 96 && charCode < 123) ||
      charCode == 8 || charCode == 32
    )
      return true;
    else return false;
  }
  message =''
  submit() {
    this.http.post('http://localhost:3000/users', this.signUp.getRawValue()).toPromise().then(resp=>{
      console.log('responce', resp)
      this.router.navigateByUrl('/login')     
    }).catch(err=>
      this.message = "user not register")
  }
}
