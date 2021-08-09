import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'src/app/Classes/filter';
import { product } from '../../Classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private subject = new BehaviorSubject<any>(0);
  
  private productsUrl = 'http://localhost:3000/Product';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.productsUrl)
  }

  getProdByCategory(category) {
    return this.http.get<product[]>(`http://localhost:3000/Product?category=${category}`)
  }

  // get product details
  sendProduct(product: object) {
    this.subject.next(product);
  }
  getProduct(): Observable<any> {
    return this.subject.asObservable();
  }

  getFilterData(category) {
    return this.http.get<filter[]>(`http://localhost:3000/categories?categoryid=${category}`)
  }
  getModelData(name) {
    return this.http.get(`http://localhost:3000/brands?name=${name}`) 
  }
  getProdByCategoryData(category) {
    return this.http.get<product[]>(`http://localhost:3000/Product?category=Vehicle`)
  }
  getVehicleData(category) {
    return this.http.get<product[]>(`http://localhost:3000/Product?category=Furniture`)
  }

  getProdByLocation(address) {
    return this.http.get<product[]>(`http://localhost:3000/Product?address=${address}`)
  }
}
