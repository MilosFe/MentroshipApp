import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './modules/first-component/first-component.component';
import { DataBindingComponent } from './modules/data-binding/data-binding.component';
import { AppSizerComponent } from './modules/app-sizer/app-sizer.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MailboxModule } from './modules/mailbox/mailbox.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { AuthPageComponent } from './modules/auth-page/auth-page.component';
import { SharedModule } from './shared/shared.module';
import { TypeaheadComponent } from './modules/typeahead/typeahead.component';
import { JwtService } from './core/interceptor/jwt-interceptor';
import { FilesizePipe } from '@shared/pipes/filesize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    DataBindingComponent,
    AppSizerComponent,
    NotFoundComponent,
    AuthPageComponent,
    TypeaheadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    MailboxModule,
    BrowserAnimationsModule,
    DashboardModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
