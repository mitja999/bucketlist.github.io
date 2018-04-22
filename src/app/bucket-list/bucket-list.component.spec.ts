import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketListComponent } from './bucket-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('BucketListComponent', () => {
  let component: BucketListComponent;
  let fixture: ComponentFixture<BucketListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BucketListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
