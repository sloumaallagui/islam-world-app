import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QiblahComponent } from './qiblah.component';

describe('QiblahComponent', () => {
  let component: QiblahComponent;
  let fixture: ComponentFixture<QiblahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QiblahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QiblahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
