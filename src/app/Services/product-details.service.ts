import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
  private subject = new BehaviorSubject<any>(0);

  constructor() {}

  sendProduct(product: object) {
    this.subject.next(product);
  }

  getProduct(): Observable<any> {
    return this.subject.asObservable();
  }
}
