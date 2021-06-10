import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestserviceService {

  constructor(private http: HttpClient) { }

  createProduct(id,checkoutForm) {
    return this.http.patch(`http://localhost:3000/Product/${id}` , checkoutForm)
  }
}
