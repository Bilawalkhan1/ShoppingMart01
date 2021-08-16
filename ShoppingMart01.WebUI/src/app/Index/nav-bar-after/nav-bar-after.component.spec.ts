import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAfterComponent } from './nav-bar-after.component';

describe('NavBarAfterComponent', () => {
  let component: NavBarAfterComponent;
  let fixture: ComponentFixture<NavBarAfterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarAfterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarAfterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
