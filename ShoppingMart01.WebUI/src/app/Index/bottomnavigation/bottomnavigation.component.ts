import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from 'src/app/accounts/login/login.component';
import { AuthguardService } from 'src/app/Services/authguard.service';

@Component({
  selector: 'app-bottomnavigation',
  templateUrl: './bottomnavigation.component.html',
  styleUrls: ['./bottomnavigation.component.css']
})
export class BottomnavigationComponent implements OnInit {

  constructor(private router:Router,
    private modalService:NgbModal,
    private authguard: AuthguardService
    ) { }

  ngOnInit(): void {
  }

  year = (new Date()).getFullYear();
  addProduct() {
    if (localStorage.getItem('token') !== null) {
      this.router.navigateByUrl('admin/sellproducts')

    }
    else {
      this.modalService.open(LoginComponent)
      this.authguard.returnUrl = 'admin/sellproducts'
    }
  }
  socialLinks =
  [
    {
      icon:'fa-facebook-f',
      link:'#'
    },
    {
      icon:'fa-twitter',
      link:'#'
    },
    {
      icon:'fa-instagram',
      link:'#'
    },
    {
      icon:'fa-youtube',
      link:'#'
    }
  ]

}
