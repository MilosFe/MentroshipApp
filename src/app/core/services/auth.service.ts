import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: any = {
    admin: false,
    name: 'Milos',
    token: 'secret1234',
  };
  constructor() {}

  checkPermission(): boolean {
    return this.user.admin;
  }
}
