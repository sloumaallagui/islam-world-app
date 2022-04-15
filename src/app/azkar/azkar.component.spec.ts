import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzkarComponent } from './azkar.component';

describe('AzkarComponent', () => {
  let component: AzkarComponent;
  let fixture: ComponentFixture<AzkarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzkarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AzkarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
