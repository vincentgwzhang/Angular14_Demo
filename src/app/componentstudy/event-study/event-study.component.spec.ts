import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventStudyComponent } from './event-study.component';

describe('EventStudyComponent', () => {
  let component: EventStudyComponent;
  let fixture: ComponentFixture<EventStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventStudyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
