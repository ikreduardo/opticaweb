import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { User } from './../interfaces/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private clientes: User[];
  endpoint = environment.endPoint;
  constructor(private http:HttpClient) { }

  getallUsers() : Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization','barrer token');
    headers = headers.append('X-pagination', '3');

    // query strings
    let params = new HttpParams();
    params = params.append('X-pagination','4');
    
    const path = this.endpoint + '/api/showUs'
    //return this.http.get<any>(path);
    return this.http.get<any>(path);

  }
}
