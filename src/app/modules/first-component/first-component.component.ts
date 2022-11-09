import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss'],
})
export class FirstComponentComponent implements OnInit {
  changed: string = '';
  show1: boolean = false;
  show2: boolean = false;

  @Input() title: string = '';
  @Output() chageValue = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  changeTitle(event: string): void {
    this.chageValue.emit(event);
  }

  logIn(event: any): void {
    console.log('I loged in', event);
  }

  signUp(event: any): void {
    console.log('I signed up', event);
  }
}
