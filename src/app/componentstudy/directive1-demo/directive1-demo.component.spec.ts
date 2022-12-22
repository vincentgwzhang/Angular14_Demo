import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Directive1DemoComponent } from './directive1-demo.component';

describe('Directive1DemoComponent', () => {
  let component: Directive1DemoComponent;
  let fixture: ComponentFixture<Directive1DemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Directive1DemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Directive1DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
