import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InterceptorAuthService implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    let myToken = 'Bearer '+localStorage.getItem('token');

    request = request.clone({
                setHeaders: {
                  Authorization: myToken
                }
              });

    return next.handle(request);
  };
}
