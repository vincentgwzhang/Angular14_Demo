import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buildin',
  templateUrl: './buildin.component.html',
  styleUrls: ['./buildin.component.css']
})
export class BuildinComponent implements OnInit {

  isRed: boolean = false;

  pClassVar: Record<string, boolean> = {
    'textgreen': !this.isRed,
    'textred': this.isRed
  };


  constructor() { }

  ngOnInit(): void {
  }

  toggleColor() {
    this.isRed = !this.isRed;
    this.pClassVar = {
      'textgreen': !this.isRed,
      'textred': this.isRed
    }
  }
}
