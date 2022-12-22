import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyclestudyComponent } from './lifecyclestudy.component';

describe('LifecyclestudyComponent', () => {
  let component: LifecyclestudyComponent;
  let fixture: ComponentFixture<LifecyclestudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecyclestudyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifecyclestudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
