import { Injectable } from '@angular/core';
import { DashBoardService } from './services/dashboard.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './../../shared/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class DashboardFasadeService {
  public users$ = new BehaviorSubject<any[]>([]);
  public passangers$ = new BehaviorSubject<any[]>([]);
  constructor(
    private _dashboardService: DashBoardService,
    private userService: UserService
  ) {}

  public getUsers() {
    return this.users$.next(this.userService.getPlayList());
  }
  public getPassangers(): void {
    this._dashboardService.getPassengers().subscribe((res) => {
      this.passangers$.next(res);
    });
  }
}
