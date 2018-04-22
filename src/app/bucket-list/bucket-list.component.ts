import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { StorageApiService } from '../shared/storage-api.service';
import { Observable } from 'rxjs/Observable';
import { Bucket, NewBucket } from './../shared/storage-api.model';

@Component({
  selector: 'app-bucket-list',
  templateUrl: './bucket-list.component.html',
  styleUrls: ['./bucket-list.component.scss']
})
export class BucketListComponent implements OnInit {

  private newBucketList: boolean = false;
  private buckets: Array<Bucket>;

  constructor(private router: Router, private _svc: StorageApiService) {
    this.buckets = new Array<Bucket>();
  }

  ngOnInit() {
    this._svc.buckets().subscribe(b => {
      this.buckets = b;
    });

    this._svc.newBucket.asObservable().subscribe(newBucket => {
      this.buckets.push(newBucket);
    });
  }

  goToBucket(id) {
    this.router.navigate(['bucketItem', id]);
  }
}
