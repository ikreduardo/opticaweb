import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  endpoint = environment.endPoint;
  constructor(private http: HttpClient) { }

  newUs(prod : IProduct) {
    return this.http.post('${this.endpoint}/new-product',prod)
  }
  DelUs() {

  }
}
