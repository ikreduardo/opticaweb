import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { IAuth } from '../interfaces/auth';
import { environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  path = environment.endPoint;
  // + '/login'

  constructor(private http: HttpClient) { }

  register(user: User): Observable<any>{
    return this.http.post('${this.path}users/register', user);
  }

}
