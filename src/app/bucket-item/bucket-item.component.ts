import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, Bucket, NewBucketObject } from './../shared/storage-api.model';
import { Observable } from 'rxjs/Observable';
import { StorageApiService } from '../shared/storage-api.service';

@Component({
  selector: 'app-bucket-item',
  templateUrl: './bucket-item.component.html',
  styleUrls: ['./bucket-item.component.scss']
})
export class BucketItemComponent implements OnInit {
  private bucket: Bucket;
  private bucketId: string;

  constructor(private router: Router, private _svc: StorageApiService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.bucketId = params["id"]);
    this.bucket = new Bucket();
  }

  uploadObject(files: FileList) {
    this._svc.createBucketObject(new NewBucketObject(this.bucketId, files.item(0))).subscribe(
      b => this._svc.applyNewBucketObject(b)
    );
  }
  ngOnInit() {
    this._svc.getBucket(this.bucketId).subscribe(b => this.bucket = b);
  }

  deleteBucket() {
    this._svc.deleteBucket(this.bucketId).subscribe(b =>
      this.router.navigate(['bucketList']));

  }

}
