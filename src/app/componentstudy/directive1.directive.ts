import {Directive, OnDestroy, OnInit} from '@angular/core';
import {LoggerServiceService} from "./logger-service.service";


// Spy on any element to which it is applied.
// Usage: <div appDirective1>...</div>
@Directive({
  selector: '[appDirective1]'
})
export class Directive1Directive implements OnInit, OnDestroy {

  constructor(private logger: LoggerServiceService) { }

  ngOnDestroy(): void {
    this.logger.log("Spy it destroy");
  }

  ngOnInit(): void {
    this.logger.log("Spy it onInit");
  }

}
