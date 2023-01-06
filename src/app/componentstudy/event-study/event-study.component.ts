import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-study',
  templateUrl: './event-study.component.html',
  styleUrls: ['./event-study.component.css']
})
export class EventStudyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onEventButtonClick($event: MouseEvent) {

    const evtMsg = $event ? ($event.target as HTMLElement).id : '';
    console.log("evtMsg:" + $event.button)
  }

  onInput($event: KeyboardEvent) {
    console.log($event.key)
  }
}
