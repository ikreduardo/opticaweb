import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAuth } from './../models/auth';

import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint = environment.endPoint;
  constructor(private http: HttpClient) { }

  register(user: User): Observable<any> {
    const path = this.endpoint + '/api/users/register'
    return this.http.post(path, user);
  }

  login(iauth: IAuth): Observable<any> {
    const nwpath = this.endpoint +'/api/login';
    return this.http.post(nwpath, iauth );
  }
}
