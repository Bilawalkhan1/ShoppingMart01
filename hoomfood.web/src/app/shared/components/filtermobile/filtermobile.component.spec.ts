import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltermobileComponent } from './filtermobile.component';

describe('FiltermobileComponent', () => {
  let component: FiltermobileComponent;
  let fixture: ComponentFixture<FiltermobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltermobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltermobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
