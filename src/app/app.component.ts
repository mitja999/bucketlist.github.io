import { Component, OnInit } from '@angular/core';
import { StorageApiService } from './shared/storage-api.service';
import { ResponseStatus } from './shared/storage-api.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  private responseStatus: ResponseStatus;
  private statusBarPercantage: number;

  constructor(private _svc: StorageApiService) { }

  ngOnInit() {
    this.statusBarPercantage = 100;
    this._svc.responseStatus.asObservable().subscribe(value => {
      this.responseStatus = value;
    })
  }
}
