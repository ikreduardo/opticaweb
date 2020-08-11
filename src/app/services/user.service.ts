import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { User } from './../interfaces/user';
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private clientes: User[];
  endpoint = environment.endPoint;
  constructor(private http:HttpClient) { }

  getallUsers() {
    const path = this.endpoint + '/api/showUs'
    //return this.http.get<User[]>(path)
    return this.http.get<any>(path);
  }
}
