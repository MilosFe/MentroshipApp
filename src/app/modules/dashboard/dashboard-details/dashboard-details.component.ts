import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, map, Subscription } from 'rxjs';
import { PassangerModel } from '../models/daashboard.interface';
import { DashBoardService } from './../services/dashboard.service';

@Component({
  selector: 'app-dashboard-details',
  templateUrl: './dashboard-details.component.html',
  styleUrls: ['./dashboard-details.component.scss'],
})
export class DashboardDetailsComponent implements OnInit {
  profileForm = this.fb.group({
    id: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
    techStack: ['', Validators.required],
    expirianceYears: [''],
  });
  show = false;
  testModel = 'Value';

  id!: string | number;
  sub!: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private _dashboardService: DashBoardService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((res: any) => {
    //   this.id = res.id;
    //   this.getPassenger();
    // });
  }

  getPassenger() {
    this.sub = this._dashboardService.getPassenger(this.id).subscribe({
      next: (value) => this.profileForm.patchValue(value),
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        this.show = true;
      },
    });
  }

  update(): void {
    console.log(this.profileForm);
    this._dashboardService
      .updatePassanger(this.id, this.profileForm.value)
      .subscribe((res) => {
        console.log(res);
      });
  }

  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }
}
