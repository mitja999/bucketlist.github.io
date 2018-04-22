import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketListNewComponent } from './bucket-list-new.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BucketListNewComponent', () => {
  let component: BucketListNewComponent;
  let fixture: ComponentFixture<BucketListNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [BucketListNewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
