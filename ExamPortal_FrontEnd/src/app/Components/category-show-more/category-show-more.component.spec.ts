import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryShowMoreComponent } from './category-show-more.component';

describe('CategoryShowMoreComponent', () => {
  let component: CategoryShowMoreComponent;
  let fixture: ComponentFixture<CategoryShowMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryShowMoreComponent]
    });
    fixture = TestBed.createComponent(CategoryShowMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
