import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private clientes: Product[];
  endpoint = environment.endPoint;
  constructor(private http:HttpClient) { }

  getallProducts() {
    const path = this.endpoint + '/api/view_products'
    return this.http.get<any>(path);
  }
}
