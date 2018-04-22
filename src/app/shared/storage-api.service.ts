import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpEvent, HttpEventType } from '@angular/common/http';
import { Location, Bucket, NewBucket, ResponseStatus, BucketObject, NewBucketObject } from './storage-api.model';
import { Observable } from 'rxjs/observable';
import { map } from 'rxjs/operators/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { catchError, tap, last } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class StorageApiService {

  public responseStatus: BehaviorSubject<ResponseStatus>;
  public newBucket = new Subject<Bucket>();
  public newBucketObject = new Subject<BucketObject>();

  private url: string = 'https://challenge.3fs.si/storage/';

  constructor(private http: HttpClient) {
    this.responseStatus = new BehaviorSubject<ResponseStatus>(new ResponseStatus(0, ""));
  }

  public locations(): Observable<Location[]> {
    return this.http.get<any>(this.url + 'locations')
      .pipe(
        map(data => data.locations),
        catchError((err: HttpErrorResponse) => {
          this.mapError(err);
          return ErrorObservable.create(err);
        })
      );
  }

  public buckets(): Observable<Array<Bucket>> {
    return this.http.get<any>(this.url + 'buckets')
      .pipe(
        map(data => data.buckets),
        catchError((err: HttpErrorResponse) => {
          this.mapError(err);
          return ErrorObservable.create(err);
        })
      );
  }

  public getBucket(bucketId: string): Observable<Bucket> {
    return this.http.get<any>(this.url + 'buckets/' + bucketId)
      .pipe(
        map(data => data.bucket),
        catchError((err: HttpErrorResponse) => {
          this.mapError(err);
          return ErrorObservable.create(err);
        })
      );
  }

  public getBucketObject(bucketId: string): Observable<Array<BucketObject>> {
    return this.http.get<any>(this.url + 'buckets/' + bucketId + "/objects")
      .pipe(
        map(data => data.objects),
        catchError((err: HttpErrorResponse) => {
          this.mapError(err);
          return ErrorObservable.create(err);
        })
      );
  }

  public createBucket(newBucket: NewBucket): Observable<Bucket> {
    return this.http.post<any>(this.url + 'buckets', newBucket)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.mapError(err);
          return ErrorObservable.create(err);
        })
      );
  }

  public createBucketObject(newBucketObject: NewBucketObject) {
    const formData: FormData = new FormData();
    formData.append('file', newBucketObject.file, newBucketObject.file.name);
    return this.http.post<any>(this.url + 'buckets/' + newBucketObject.bucket + "/objects",
      formData)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.mapError(err);
          return ErrorObservable.create(err);
        })
      );
  }

  public deleteBucket(bucketId: string) {
    return this.http.delete<any>(this.url + 'buckets/' + bucketId)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.mapError(err);
          return ErrorObservable.create(err);
        })
      );
  }

  public deleteBucketObject(bucketId: string, objectId: string) {
    return this.http.delete<any>(this.url + 'buckets/' + bucketId + "/objects/" + objectId)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.mapError(err);
          return ErrorObservable.create(err);
        })
      );
  }

  private mapError(err: HttpErrorResponse) {
    console.error('An error occurred:', err.error);
    switch (err.status) {
      case 400:
        this.responseStatus.next(new ResponseStatus(err.status, "Request is badly formatted."));
        break;
      case 404:
        this.responseStatus.next(new ResponseStatus(err.status, "Required entity cannot be found."));
        break;
      case 409:
        this.responseStatus.next(new ResponseStatus(err.status, "The request could not be completed due to a conflict with the current state"));
        break;
      default:
        this.responseStatus.next(new ResponseStatus(err.status, "Error: " + err.message));
        break;
    }
  }

  public applyNewBucket(bucket: Bucket) {
    this.newBucket.next(bucket);
  }

  public applyNewBucketObject(bucketObject: BucketObject) {
    this.newBucketObject.next(bucketObject);
  }

  /*private getEventMessage(event: HttpEvent<any>) {
    debugger;
    /*switch (event.type) {
      case HttpEventType.Sent:
        return `Uploading file "${file.name}" of size ${file.size}.`;
  
      case HttpEventType.UploadProgress:
        // Compute and show the % done:
        const percentDone = Math.round(100 * event.loaded / event.total);
        return `File "${file.name}" is ${percentDone}% uploaded.`;
  
      case HttpEventType.Response:
        return `File "${file.name}" was completely uploaded!`;
  
      default:
        return `File "${file.name}" surprising upload event: ${event.type}.`;
    }
  }*/
}
