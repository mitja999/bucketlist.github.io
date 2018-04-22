import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, Bucket, BucketObject } from './../../shared/storage-api.model';
import { Observable } from 'rxjs/Observable';
import { StorageApiService } from '../../shared/storage-api.service';

@Component({
  selector: 'app-bucket-item-files',
  templateUrl: './bucket-item-files.component.html',
  styleUrls: ['./bucket-item-files.component.scss']
})
export class BucketItemFilesComponent implements OnInit {

  private bucketId: string;
  private bucketbjects: Array<BucketObject>;
  constructor(private router: Router, private _svc: StorageApiService, private route: ActivatedRoute) {
    this.bucketbjects = new Array<BucketObject>();
    this.route.parent.params.subscribe(params => {
      this.bucketId = params["id"]
    });
  }

  ngOnInit() {
    this._svc.getBucketObject(this.bucketId).subscribe(b => this.bucketbjects = b);

    this._svc.newBucketObject.asObservable().subscribe(newBucketObject => {
      this.bucketbjects.push(newBucketObject);
    });
  }

  deleteBucketObject(name: string) {
    this._svc.deleteBucketObject(this.bucketId, name).subscribe(d => {

      this._svc.getBucketObject(this.bucketId).subscribe(b => this.bucketbjects = b);
    });
  }
}
