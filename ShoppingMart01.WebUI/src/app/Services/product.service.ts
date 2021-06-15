import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from '../Classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsUrl = 'http://localhost:3000/Product';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(this.productsUrl)
  }

  getProdByCategory(category) {
    return this.http.get<product[]>(`http://localhost:3000/Product?category=${category}`)
  }
}

// getProducts(): Observable<Product[]> {
//   return this.http.get<Product[]>(this.productsUrl).pipe(
//     retry(2),
//     catchError((error: HttpErrorResponse) => {
//       console.error(error);
//       return throwError(error);
//     })
//   );
// }

// createProduct(product: Product): Observable<Product> {
//   product.id = null;
//   return this.http.post<Product>(this.productsUrl, product).pipe(
//     catchError((error: HttpErrorResponse) => {
//       console.error(error);
//       return throwError(error);
//     })
//   )
// }

// editProduct(product: Product): Observable<any> {
//   return this.http.put(this.productsUrl + product.id, product);
// }

// deleteProduct(id: number): Observable<any> {
//   return this.http.delete(this.productsUrl + id);
// }