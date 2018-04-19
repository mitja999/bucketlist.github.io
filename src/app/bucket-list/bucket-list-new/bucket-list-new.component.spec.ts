import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketListNewComponent } from './bucket-list-new.component';

describe('BucketListNewComponent', () => {
  let component: BucketListNewComponent;
  let fixture: ComponentFixture<BucketListNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketListNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketListNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
