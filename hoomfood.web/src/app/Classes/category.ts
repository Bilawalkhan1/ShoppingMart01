import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class Category {
  constructor (private http: HttpClient) { }

  GetProdByCategoryId(_categoryId, _subcategoryId?) {
    let params = new HttpParams()
    params = params.set("categoryid", _categoryId)

    if (_subcategoryId) {
      params = params.set("subcategoryid", _subcategoryId)
    }
    return this.http.get<any>(`http://localhost:3000/Product`, { params: params })
  }

  GetProductData(url,_categoryId, _subcategoryId?){
    let params = new HttpParams()
    params = params.set("categoryid", _categoryId)

    if (_subcategoryId) {
      params = params.set("subcategoryid", _subcategoryId)
    }
    return this.http.get<any>(`http://localhost:3000/Product?${url}`,{ params: params })
  }
}
