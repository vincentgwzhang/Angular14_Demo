import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectObserveStudyServiceService {

  private missionPublishedSubject = new Subject<string>();

  private missionConfirmedSubject = new Subject<string>();

  missionPublished: Observable<string> = this.missionPublishedSubject.asObservable();

  missionConfirmed: Observable<string> = this.missionConfirmedSubject.asObservable();

  publishMission(mission: string) {
    this.missionPublishedSubject.next(mission);
  }

  confirmMission(mission: string) {
    this.missionConfirmedSubject.next(mission);
  }
}
