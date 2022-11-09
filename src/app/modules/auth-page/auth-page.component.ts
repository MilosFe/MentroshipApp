import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { DashBoardService } from '../dashboard/services/dashboard.service';

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
})
export class AuthPageComponent implements OnInit {
  @Output() submitted: EventEmitter<any> = new EventEmitter<any>();
  @Input() title!: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(value: any): void {
    this.submitted.emit(value);
  }
}
