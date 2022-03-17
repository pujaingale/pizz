import { Injectable } from '@angular/core';
import{HttpInterceptor,HttpRequest,HttpHandler,HttpEvent} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    const APIKEY="12345";
    return next.handle(req.clone({setHeaders:{APIKEY}}))

  }
}
