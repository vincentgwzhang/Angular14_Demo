import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectObserveDemoComponent } from './subject-observe-demo.component';

describe('SubjectObserveDemoComponent', () => {
  let component: SubjectObserveDemoComponent;
  let fixture: ComponentFixture<SubjectObserveDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectObserveDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectObserveDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
