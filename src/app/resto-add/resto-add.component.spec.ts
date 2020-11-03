import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoAddComponent } from './resto-add.component';

describe('RestoAddComponent', () => {
  let component: RestoAddComponent;
  let fixture: ComponentFixture<RestoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
