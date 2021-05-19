import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  signUp = this.fb.group({
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    emailId: ['',Validators.compose([Validators.required, Validators.email])],
    address: this.fb.group({
      province: [''],
      city: [''],
    }),
    password: [''],
    confirmPassword: [''],
  });

}
