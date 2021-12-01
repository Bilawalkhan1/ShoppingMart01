import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBrowsingComponent } from './product-browsing.component';

describe('ProductBrowsingComponent', () => {
  let component: ProductBrowsingComponent;
  let fixture: ComponentFixture<ProductBrowsingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductBrowsingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBrowsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
