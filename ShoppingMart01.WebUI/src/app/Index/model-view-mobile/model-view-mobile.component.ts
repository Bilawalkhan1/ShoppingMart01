import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from 'src/app/shared/models/product.service';

@Component({
  selector: 'app-model-view-mobile',
  templateUrl: './model-view-mobile.component.html',
  styleUrls: ['./model-view-mobile.component.css']
})
export class ModelViewMobileComponent implements OnInit {
  data: [];
  category

  constructor(private productService: ProductService,
    public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.data = this.productService.categorydata
    this.category = this.productService.category
    console.log(this.data)
  }

}
