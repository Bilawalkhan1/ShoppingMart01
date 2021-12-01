import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  register: boolean;
  submitted = false;
  signUp: FormGroup;
  IsmodelShow: boolean;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private modelservice: NgbModal,
    private router: Router,
    public activeModal: NgbActiveModal
  ) {
    this.signUp = fb.group({
      title: fb.control('initial value', Validators.required)
    });
  }

  ngOnInit(): void {
    this.register = false;
    this.signUp = this.fb.group({
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
  }
signUpclose(){
  this.activeModal.close()
}


  get f() {
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

    if (this.signUp.invalid) {
      return;
    }
    
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signUp.value, null, 4));

    this.http
      .post('http://localhost:3000/users', this.signUp.getRawValue())
      .toPromise()
      .then((resp) => {
        this.register = true;
      })
      .catch();
  }

  openModel() {
    this.modelservice.open(LoginComponent)
  }

  close() {
    this.IsmodelShow = true;
  }
}
