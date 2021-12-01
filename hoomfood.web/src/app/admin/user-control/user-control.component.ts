import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService } from 'angularx-social-login';
import { product } from 'src/app/Classes/product';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { ProductService } from 'src/app/shared/models/product.service';
import { AddproductsComponent } from '../addproducts/addproducts.component';
declare var $: any;

@Component({
  selector: 'app-user-control',
  templateUrl: './user-control.component.html',
  styleUrls: ['./user-control.component.css']
})
export class UserControlComponent implements OnInit {
  products: product[] = [];
  constructor (
    private authService: AuthenticationService,
    private router: Router,
    private socialAuthService: SocialAuthService,
    private modalService: NgbModal,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
  this.productService.getProducts().subscribe(products => this.products = products);
  }
  public covertPhotoUrl(photoUrl){
    return `data:image/jpeg;base64,${photoUrl}`
  }

  ngAfterViewInit(): void {
    $(document).ready(function () {
      // Activate tooltip
      $('[data-toggle="tooltip"]').tooltip();

      // Select/Deselect checkboxes
      var checkbox = $('table tbody input[type="checkbox"]');
      $("#selectAll").click(function () {
        if (this.checked) {
          checkbox.each(function () {
            this.checked = true;
          });
        } else {
          checkbox.each(function () {
            this.checked = false;
          });
        }
      });
      checkbox.click(function () {
        if (!this.checked) {
          $("#selectAll").prop("checked", false);
        }
      });
    });
  }

  addnew() {
    this.modalService.open(AddproductsComponent, { windowClass: 'my-class'})
  }

  logOut() {
    this.authService.userLogout();
    this.socialAuthService.signOut();
    return this.router.navigateByUrl('/login')
  }
}
