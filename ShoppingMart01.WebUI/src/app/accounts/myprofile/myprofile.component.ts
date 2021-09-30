import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/shared/models/product.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  user: [];

  constructor(private productService: ProductService,
    public activeModal: NgbActiveModal,) { }

  ngOnInit(): void {
    this.user = this.productService.userData
  }
  public covertPhotoUrl(photoUrl) {
    return `data:image/jpeg;base64,${photoUrl}`
  }
}
