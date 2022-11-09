import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  exportAs: 'tooltip',
})
export class TooltipDirective {
  tooltipElement = document.createElement('div');
  visible = false;

  ngOnInit() {
    this.tooltipElement.className = 'tooltip';
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container');
  }

  @Input()
  set tooltip(value: string) {
    this.tooltipElement.textContent = value;
  }

  hide() {
    this.tooltipElement.classList.remove('tooltip--active');
  }

  show() {
    this.tooltipElement.classList.add('tooltip--active');
  }

  constructor(private element: ElementRef) {}
}
