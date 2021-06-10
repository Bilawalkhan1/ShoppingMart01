import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageserviceService {
  
  constructor(private http: HttpClient) {}


  public uploadImage(image: File): Observable<Response> {debugger

    const formData = new FormData();

    formData.append('image[]',image);
    console.log(formData)
debugger
    return this.http.post<any>('http://localhost:3000/Pimg', formData);
  }

}
