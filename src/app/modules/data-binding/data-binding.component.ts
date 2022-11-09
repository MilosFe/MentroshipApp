import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  @Input() data: string = 'Welcome';
  @Output() outputData: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  emitDataToParent(): void {
    this.outputData.emit('Hi from child component');
  }
}
