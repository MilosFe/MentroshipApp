import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CreditCardDirective } from './credit-card.directive';
import { PassangerModel } from './models/daashboard.interface';
import { DashBoardService } from './services/dashboard.service';
import { TooltipDirective } from './tooltip/tooltip.directive';
import {
  debounceTime,
  fromEvent,
  map,
  Observable,
  Subscription,
  tap,
} from 'rxjs';
import { DashboardFasadeService } from './dashboard.fasade.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public passangers$ = this._dashboardFasade.passangers$;
  public users$ = this._dashboardFasade.users$;

  @ViewChild(TooltipDirective) directive!: TooltipDirective;
  @ViewChild(CreditCardDirective) creditCard!: CreditCardDirective;
  @ViewChild('coffe') coffe!: ElementRef;
  @ViewChild('btn', { static: true }) btn!: ElementRef;
  private buttonSubscription!: Subscription;

  constructor(private _dashboardFasade: DashboardFasadeService) {}

  ngOnInit(): void {
    this._dashboardFasade.getUsers();
    this._dashboardFasade.getPassangers();
  }

  buttonClick() {
    this.buttonSubscription = fromEvent(this.btn.nativeElement, 'click')
      .pipe(debounceTime(1000))
      .subscribe(() => {
        this.log();
      });
  }

  log() {
    console.log('I clicked');
  }
}
