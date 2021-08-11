import { HttpClient, HttpParams } from '@angular/common/http';
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

  getFilterData(_categoryId, _subcategoryId?) {

    let params = new HttpParams()
    params = params.set("categoryid", _categoryId)

    if (_subcategoryId) {
      params = params.set("subcategoryid", _subcategoryId)
    }

    return this.http.get<filter[]>(`http://localhost:3000/categories`, { params: params })
  }

  getFormData() {
    return this.http.get(`http://localhost:3000/form`)
  }

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


  getModelData(name) {
    return this.http.get(`http://localhost:3000/brands?name=${name}`)
  }

  getList(name) {
    return this.http.get(`http://localhost:3000/Product?Product_Name=${name}`)
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
  getSubCategory(name) {
    return this.http.get(`http://localhost:3000/categoryValue?name=${name}`)
  }

}
