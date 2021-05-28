import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'api/products/';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.productsUrl)
  }

 
}
