import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StorageApiService } from './shared/storage-api.service';
import { RouterModule } from '@angular/router';
import{ HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[ RouterModule.forRoot([
        {
          path: '',
          redirectTo: '/bucketList',
          pathMatch: 'full'
        }]),HttpClientModule],
      providers:[StorageApiService,{provide: APP_BASE_HREF, useValue : '/' }],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  
});
