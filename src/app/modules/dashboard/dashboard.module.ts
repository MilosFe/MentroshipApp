import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardService } from './services/dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { DashboardDetailsComponent } from './dashboard-details/dashboard-details.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditCardDirective } from './credit-card.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { DebounceDirective } from './debounce/debounce.directive';
import { SharedModule } from '@shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'details/:id', component: DashboardDetailsComponent },
];

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardDetailsComponent,
    CreditCardDirective,
    TooltipDirective,
    DebounceDirective,
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    SharedModule,
  ],

  providers: [DashBoardService],
})
export class DashboardModule {}
