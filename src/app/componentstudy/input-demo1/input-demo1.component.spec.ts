import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDemo1Component } from './input-demo1.component';

describe('InputDemo1Component', () => {
  let component: InputDemo1Component;
  let fixture: ComponentFixture<InputDemo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDemo1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
