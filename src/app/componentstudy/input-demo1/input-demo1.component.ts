import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-demo1',
  templateUrl: './input-demo1.component.html',
  styleUrls: ['./input-demo1.component.css']
})
export class InputDemo1Component implements OnInit {

  value = 0;

  constructor() { }

  ngOnInit(): void {
  }

  plus() {
    this.value++;
  }

  minus() {
    this.value--;
  }
}
