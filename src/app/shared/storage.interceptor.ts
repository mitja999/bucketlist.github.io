import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http'
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import { of } from 'rxjs/observable/of';

import { Observable } from 'rxjs/observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
export class StorageInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        request = request.clone({
            headers: request.headers.append('Authorization', 'Token 9C992A77-85DE-492E-9BF9-B5F253981732')
        });
        return next.handle(request).retryWhen((errors) => {
            return errors
                .mergeMap((err, i) => {
                    if (i > 1) {
                        return ErrorObservable.create(err);
                    }
                    //retry if "something went wrong"
                    if (err instanceof HttpErrorResponse && err.status === 500) {
                        return of(err).delay(1000);
                    } else {
                        return ErrorObservable.create(err);
                    }
                });
        });
    }
}