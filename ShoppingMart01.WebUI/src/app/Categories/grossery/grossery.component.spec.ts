import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrosseryComponent } from './grossery.component';

describe('GrosseryComponent', () => {
  let component: GrosseryComponent;
  let fixture: ComponentFixture<GrosseryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrosseryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrosseryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
