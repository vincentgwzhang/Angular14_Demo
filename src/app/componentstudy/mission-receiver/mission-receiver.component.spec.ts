import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionReceiverComponent } from './mission-receiver.component';

describe('MissionReceiverComponent', () => {
  let component: MissionReceiverComponent;
  let fixture: ComponentFixture<MissionReceiverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionReceiverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
