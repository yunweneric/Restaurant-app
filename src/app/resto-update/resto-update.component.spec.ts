import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoUpdateComponent } from './resto-update.component';

describe('RestoUpdateComponent', () => {
  let component: RestoUpdateComponent;
  let fixture: ComponentFixture<RestoUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
