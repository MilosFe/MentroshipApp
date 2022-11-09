import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSizerComponent } from './modules/app-sizer/app-sizer.component';
import { AuthGuardService } from './core/guard/auth.guard.service';
import { FirstComponentComponent } from './modules/first-component/first-component.component';
import { InboxComponent } from './modules/mailbox/inbox/inbox.component';
import { MailboxComponent } from './modules/mailbox/mailbox.component';
import { TypeaheadComponent } from './modules/typeahead/typeahead.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent, pathMatch: 'full' },
  { path: 'app', component: AppSizerComponent },
  {
    path: 'typehead',
    component: TypeaheadComponent,
  },
  {
    path: 'mailbox',
    component: MailboxComponent,
    canActivateChild: [AuthGuardService],
    children: [{ path: 'inbox', component: InboxComponent }],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
    canLoad: [AuthGuardService],
  },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
