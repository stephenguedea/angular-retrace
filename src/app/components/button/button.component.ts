import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  // input
  @Input() text!: string;
  @Input() color!: string;

  // making the button reuseable in any component
  @Output() btnClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // emitting an event
  onClick() {
    this.btnClick.emit();
  }

}
