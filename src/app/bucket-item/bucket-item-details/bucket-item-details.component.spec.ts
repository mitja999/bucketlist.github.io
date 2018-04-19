import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketItemDetailsComponent } from './bucket-item-details.component';

describe('BucketItemDetailsComponent', () => {
  let component: BucketItemDetailsComponent;
  let fixture: ComponentFixture<BucketItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
