import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {
  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('httpRequest',httpRequest);
    const newReq = httpRequest.clone({url:httpRequest.url + "?APIKey:12345"});
    console.log('newReq = ',newReq);
    return next.handle(newReq);
  }
}
