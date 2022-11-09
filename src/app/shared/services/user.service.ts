import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getPlayList(): any {
    return [
      {
        band: 'Pink Floyd',
        song: 'Shine on you crazy diamond',
      },
      {
        band: 'Deep Purple',
        song: 'Strange kind of woman ',
      },
    ];
  }
}
