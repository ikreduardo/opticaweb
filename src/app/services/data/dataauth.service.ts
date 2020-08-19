import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataauthService {
  getToken(): string {
    return localStorage.getItem('token');
  }

  getRefreshToken(): any {
    return localStorage.getItem('refresh-token');
  }

  getUser(): any {
    const user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

}
