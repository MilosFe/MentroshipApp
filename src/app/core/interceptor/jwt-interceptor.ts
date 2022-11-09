import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@core/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class JwtService implements HttpInterceptor {
  constructor(private _authservice: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this._authservice.user.token;

    console.log(token);
    if (req.url.endsWith('/users')) {
      console.log('Ends with user');
      let request = req.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token,
        },
      });
      return next.handle(request);
    }
    console.log('Not ending with user');
    return next.handle(req);
  }
}
