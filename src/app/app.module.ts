import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BucketListComponent } from './bucket-list/bucket-list.component';
import { BucketListNewComponent } from './bucket-list/bucket-list-new/bucket-list-new.component';
import { BucketItemComponent } from './bucket-item/bucket-item.component';
import { BucketItemFilesComponent } from './bucket-item/bucket-item-files/bucket-item-files.component';
import { BucketItemDetailsComponent } from './bucket-item/bucket-item-details/bucket-item-details.component';
import { StorageApiService } from './shared/storage-api.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { CommonModule } from "@angular/common";
import { StorageInterceptor } from './shared/storage.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgMathPipesModule } from 'angular-pipes';

@NgModule({
  declarations: [
    AppComponent,
    BucketListComponent,
    BucketItemComponent,
    BucketListNewComponent,
    BucketItemFilesComponent,
    BucketItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    NgMathPipesModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/bucketList',
        pathMatch: 'full'
      },
      {
        path: 'bucketList',
        component: BucketListComponent,
        children: [
          { path: 'new', component: BucketListNewComponent }
        ]
      },
      {
        path: 'bucketItem/:id',
        component: BucketItemComponent,
        children: [
          { path: '', redirectTo: 'files', pathMatch: 'full' },
          { path: 'files', component: BucketItemFilesComponent },
          { path: 'details', component: BucketItemDetailsComponent }
        ]
      }
    ])
  ],
  providers: [StorageApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: StorageInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
