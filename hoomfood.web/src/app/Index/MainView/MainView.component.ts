import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { AuthService } from 'src/app/Services/auth.service';
import { ProductService } from 'src/app/shared/models/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-MainView',
  templateUrl: './MainView.component.html',
  styleUrls: ['./MainView.component.css'],
})
export class MainViewComponent {
  
}
