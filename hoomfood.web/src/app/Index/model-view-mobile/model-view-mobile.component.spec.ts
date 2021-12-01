import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelViewMobileComponent } from './model-view-mobile.component';

describe('ModelViewMobileComponent', () => {
  let component: ModelViewMobileComponent;
  let fixture: ComponentFixture<ModelViewMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelViewMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelViewMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
