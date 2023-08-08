import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadQuizzesToUserDashboardComponent } from './load-quizzes-to-user-dashboard.component';

describe('LoadQuizzesToUserDashboardComponent', () => {
  let component: LoadQuizzesToUserDashboardComponent;
  let fixture: ComponentFixture<LoadQuizzesToUserDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadQuizzesToUserDashboardComponent]
    });
    fixture = TestBed.createComponent(LoadQuizzesToUserDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
