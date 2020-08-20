import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent,HttpHeaders ,HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DataauthService } from './../data/dataauth.service'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor(private router: Router, private datasv: DataauthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    const token = this.datasv.getToken();
    //alert(token);
    //const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjIsImRhdGEiOnsiaWQiOjIsInVzZXJuYW1lIjoiSm9zZSBMdWlzIiwiZW1haWwiOiJhZG1pbkBhZG1pbi5jb20iLCJjcmVhdGVkX2F0IjpudWxsLCJ1cGRhdGVkX2F0IjpudWxsLCJzdGF0dXMiOjEsImxhc3RfbmFtZSI6Ik1hcnRpbmV6IFJpb3MiLCJkaXJlY3Rpb24iOiJDb2wuIFJpbmNvbiBkZSBsYSBNZXJjZWQgTi4xMzkyIiwidGVsIjoiODctMTUtMTQtMjItMjIiLCJyb2xlX2lkIjozfSwiaWF0IjoxNTk3NDM1MTEwfQ.UOHQblYc9PLCWAYqy6Be0sT4_aHcM1iPXSM6CT4-e7A';
    req = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next.handle(req);
  }
}
