import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZekerComponent } from './zeker.component';

describe('ZekerComponent', () => {
  let component: ZekerComponent;
  let fixture: ComponentFixture<ZekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZekerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
