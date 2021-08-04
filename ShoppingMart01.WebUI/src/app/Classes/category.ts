import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { product } from "./product";

@Injectable({
  providedIn: 'root'
})
export class Category {
  constructor (private http: HttpClient) { }

  GetProdByCategoryId(_categoryId, _subcategoryId?) {

    // if (_categoryId) {
    //   if (_subcategoryId) {
    //     console.log("subcatgry", _subcategoryId)
    //     return this.http.get<any>(`http://localhost:3000/Product?subcategoryid=${_subcategoryId}`)
    //   }
    //   else
    //     console.log("catgryid", _categoryId)

    let params = new HttpParams()
    params = params.set("categoryid", _categoryId)

    if (_subcategoryId) {
      params = params.set("subcategoryid", _subcategoryId)
    }
    console.log(params.toString())
    return this.http.get<any>(`http://localhost:3000/Product`, { params: params })
    // }
  }
}
