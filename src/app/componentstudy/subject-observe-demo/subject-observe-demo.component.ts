import { Component, OnInit } from '@angular/core';
import {SubjectObserveStudyServiceService} from "../subject-observe-study-service.service";

@Component({
  selector: 'app-subject-observe-demo',
  templateUrl: './subject-observe-demo.component.html',
  styleUrls: ['./subject-observe-demo.component.css']
})
export class SubjectObserveDemoComponent implements OnInit {

  constructor(private missionService: SubjectObserveStudyServiceService) {
    this.missionService.missionConfirmed.subscribe(mission => {
      console.log(mission);
    })
  }

  missions = ["mission1", "mission2", "mission3"];

  astronauts = ['Vincent1', 'Vincent2', 'Vincent3'];

  nextMission = 0;

  announce() {
    const mission = this.missions[this.nextMission++];
    this.missionService.publishMission(mission);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

  ngOnInit(): void {
  }
}
