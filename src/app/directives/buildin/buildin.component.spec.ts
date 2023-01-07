import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildinComponent } from './buildin.component';

describe('BuildinComponent', () => {
  let component: BuildinComponent;
  let fixture: ComponentFixture<BuildinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
