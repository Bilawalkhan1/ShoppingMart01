import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { product } from '../Classes/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private fireEvent = new Subject<boolean>();

  event = this.fireEvent.asObservable();

  constructor() { }

  items: product[] = [];

  addToCart(product: product) {
    this.items.push(product);
    localStorage.setItem('Cart', JSON.stringify(this.items))
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  emitEvent(bool: boolean) {
    this.fireEvent.next(bool);
  }
}
