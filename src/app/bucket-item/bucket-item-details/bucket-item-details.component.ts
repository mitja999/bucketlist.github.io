import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, Bucket } from './../../shared/storage-api.model';
import { Observable } from 'rxjs/Observable';
import { StorageApiService } from '../../shared/storage-api.service';

@Component({
  selector: 'app-bucket-item-details',
  templateUrl: './bucket-item-details.component.html',
  styleUrls: ['./bucket-item-details.component.scss']
})
export class BucketItemDetailsComponent implements OnInit {
  private bucketId: string;
  private bucket: Bucket;
  private bucketSize: number;

  constructor(private router: Router, private _svc: StorageApiService, private route: ActivatedRoute) {
    this.bucket = new Bucket();
    this.route.parent.params.subscribe(params => {
      this.bucketId = params["id"]
    });
  }

  ngOnInit() {

    this._svc.getBucket(this.bucketId).subscribe(b => { this.bucket = b });
    this._svc.getBucketObject(this.bucketId).subscribe(b => {
      this.bucketSize = b.reduce((cur, acc) => cur + acc.size, 0);
    });
  }


}
