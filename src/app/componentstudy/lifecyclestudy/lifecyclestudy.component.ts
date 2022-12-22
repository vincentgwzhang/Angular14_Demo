import {
  Component,
  OnInit,
  OnDestroy,
  DoCheck,
  AfterContentChecked,
  AfterViewChecked,
  AfterContentInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-lifecyclestudy',
  templateUrl: './lifecyclestudy.component.html',
  styleUrls: ['./lifecyclestudy.component.css']
})
export class LifecyclestudyComponent implements OnInit, OnDestroy, DoCheck, AfterContentChecked, AfterViewChecked, OnChanges, AfterContentInit {

  constructor() {
    console.log("This function would be called first");
  }

  ngAfterContentInit(): void {
    console.log("this is ngAfterContentInit function");
    }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("this is ngOnChanges function");
  }

  ngOnInit(): void {
    console.log("this is ngOnInit function");
  }

  ngOnDestroy(): void {
    console.log("this is ngOnDestroy function");
  }

  /**
   * This three function called very frequently
   */
  ngAfterContentChecked(): void {
    // this function runs as around check, AOP like
  }

  /**
   * This three function called very frequently
   */
  ngAfterViewChecked(): void {
    // this function runs as around check, AOP like
  }

  /**
   * This three function called very frequently
   */
  ngDoCheck(): void {
    // this function runs as around check, AOP like
  }

}
