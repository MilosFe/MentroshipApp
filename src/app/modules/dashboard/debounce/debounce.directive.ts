import {
  Directive,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { debounceTime, Subject, Subscription } from 'rxjs';

@Directive({
  selector: '[appDebounce]',
})
export class DebounceDirective implements OnInit, OnDestroy {
  @Input() debounceTime: number = 500;
  @Output() debounced = new EventEmitter();
  private clicks = new Subject();
  private subscription!: Subscription;
  constructor() {}

  ngOnInit() {
    this.subscription = this.clicks
      .pipe(debounceTime(this.debounceTime))
      .subscribe((event) => {
        this.debounced.emit(event);
      });
  }

  @HostListener('input', ['$event'])
  clickEvent(event: any) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
