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
  register: boolean;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.register = false;
  }

  signUp = this.fb.group({
    firstName: ['', [Validators.required, Validators.maxLength(20)]],
    email: ['', Validators.compose([Validators.required, Validators.email])],   
    password: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
    ],
    confirmPassword: [
      '',
      [Validators.required, Validators.minLength(6), Validators.maxLength(20)],
    ],
  });

  get f (){
    return this.signUp.controls;
  }
  
  lettersOnly(event: any) {
    var charCode = event.keyCode;
    if (
      (charCode > 64 && charCode < 91) ||
      (charCode > 96 && charCode < 123) ||
      charCode == 8 ||
      charCode == 32 || charCode == 9
    )
      return true;
    else return false;
  }

  message = '';
  submit() {
    this.submitted = true;
    this.http
      .post('http://localhost:3000/users', this.signUp.getRawValue())
      .toPromise()
      .then((resp) => {
        console.log('responce', resp);
        this.register = true;
      })
      .catch();
  }
}
