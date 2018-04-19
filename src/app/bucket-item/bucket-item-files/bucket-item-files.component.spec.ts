import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketItemFilesComponent } from './bucket-item-files.component';

describe('BucketItemFilesComponent', () => {
  let component: BucketItemFilesComponent;
  let fixture: ComponentFixture<BucketItemFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketItemFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketItemFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
