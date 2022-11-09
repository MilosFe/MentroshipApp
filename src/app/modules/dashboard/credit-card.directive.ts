import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appCreditCard]',
  exportAs: 'appCreditCard',
})
export class CreditCardDirective {
  @Input() delimiter!: string;
  constructor(private el: ElementRef) {
    console.log('Ovo je referenca na element -->', el);
  }

  @HostBinding('style.backgroundColor') color = 'yellow';

  @HostListener('input', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    let trimmed = input.value.replace(/[\s-]/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substring(0, 16);
    }
    let element = [];

    for (let i = 0; i < trimmed.length; i += 4) {
      element.push(trimmed.substring(i, i + 4));
    }
    console.log(element);
    input.value = element.join(this.delimiter);
  }
}
