import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LoggerServiceService} from "../../logger-service.service";

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent implements OnInit, OnChanges {

  @Input() subComponentValue!: Number;

  constructor(private logger : LoggerServiceService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      const chng = changes[propName];
      const cur  = JSON.stringify(chng.currentValue);
      const prev = JSON.stringify(chng.previousValue);
      this.logger.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
    }
  }

  ngOnInit(): void {
  }

}
