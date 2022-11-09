import { Component } from '@angular/core';
import { Nav } from '@shared/interfaces/shared.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  user: any;
  nav: Nav[] = [
    {
      link: '',
      name: 'First',
      exact: true,
    },
    {
      link: 'app',
      name: 'App',
      exact: true,
    },
    {
      link: 'dashboard',
      name: 'Dashboard',
      exact: true,
    },
    {
      link: 'mailbox',
      name: 'Mailbox',
      exact: true,
    },
    {
      link: 'typehead',
      name: 'typehead',
      exact: true,
    },
  ];
}
