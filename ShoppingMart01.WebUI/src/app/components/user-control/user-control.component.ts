import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})
export class UserControlComponent implements OnInit {

  constructor( private authService : AuthenticationService, private router: Router, private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.userLogout();
    this.socialAuthService.signOut();
    return this.router.navigateByUrl('/login')       
  }
}
