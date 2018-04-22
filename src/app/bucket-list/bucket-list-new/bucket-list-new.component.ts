import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { StorageApiService } from './../../shared/storage-api.service';
import { Location, NewBucket, Bucket } from './../../shared/storage-api.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bucket-list-new',
  templateUrl: './bucket-list-new.component.html',
  styleUrls: ['./bucket-list-new.component.scss']
})
export class BucketListNewComponent implements OnInit {

  @Output() onVoted = new EventEmitter<boolean>();
  private locations: Array<Location>;
  private newBucket: NewBucket;

  constructor(private _svc: StorageApiService, private router: Router) {
    this.newBucket = new NewBucket();
    this.locations = new Array<Location>();
  }

  ngOnInit() {
    this._svc.locations().subscribe(l => this.locations = l);
  }

  private createBucket() {
    this._svc.createBucket(this.newBucket).subscribe(val => {
      this._svc.applyNewBucket(val);
      this.router.navigate(['bucketList']);
    });


    //this._svc.createBucket(this.newBucket);
  }
}
