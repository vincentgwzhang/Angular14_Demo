import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive1-demo',
  templateUrl: './directive1-demo.component.html',
  styleUrls: ['./directive1-demo.component.css']
})
export class Directive1DemoComponent implements OnInit {

  newName = '';

  names: string[] = ['ABC', 'DEF'];

  constructor() { }

  ngOnInit(): void {
  }

  action1() {
    if (this.newName.trim()) {
      this.names.push(this.newName);
      this.newName = '';
    }
  }

  action2() {
    this.names = ['ABC', 'DEF'];
  }
}
