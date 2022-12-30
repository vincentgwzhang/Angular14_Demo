import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SubjectObserveStudyServiceService} from "../subject-observe-study-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-mission-receiver',
  templateUrl: './mission-receiver.component.html',
  styleUrls: ['./mission-receiver.component.css']
})
export class MissionReceiverComponent implements OnInit, OnDestroy {

  @Input() receiver = "";

  mission :string = "No mission anounced";

  confirmed: boolean = false;

  received: boolean = false;

  subscription: Subscription;

  constructor(private missionService: SubjectObserveStudyServiceService) {
    this.subscription = missionService.missionPublished.subscribe(mission => {
      this.mission = mission;
      this.confirmed = false;
      this.received = true;
    });
  }

  ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

  ngOnInit(): void {
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(`Receiver ${this.receiver} confirmed the mission ${this.mission}`);
  }
}
