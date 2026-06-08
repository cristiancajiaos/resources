import { HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  let modifiedReq = req.clone({
    url: `${environment.baseUrl}${req.url}`
  });
  return next(modifiedReq);
};
