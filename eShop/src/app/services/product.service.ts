import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>('https://onlinetestapi.gerasim.in/api/Ecomm/GetAllProducts');
  }

  addToCart(object: any): Observable<any> {
    return this.http.post<any>('https://onlinetestapi.gerasim.in/api/Ecomm/addToCart', object);
  }
}
