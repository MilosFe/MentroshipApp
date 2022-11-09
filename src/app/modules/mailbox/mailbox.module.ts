import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MailboxComponent } from './mailbox.component';
import { InboxComponent } from './inbox/inbox.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

const routes: Routes = [{ path: '', component: InboxComponent }];

@NgModule({
  declarations: [MailboxComponent, InboxComponent],
  imports: [CommonModule, AppRoutingModule, RouterModule.forChild(routes)],
})
export class MailboxModule {}
