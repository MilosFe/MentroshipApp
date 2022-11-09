import { Injectable } from '@angular/core';
import { Observable, map, tap, catchError, of, Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PassangerModel } from './../models/daashboard.interface';

const USER_API: string = 'http://localhost:3000/users';

@Injectable({
  providedIn: 'root',
})
export class DashBoardService {
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private http: HttpClient) {}

  getPassengers(): Observable<any[]> {
    return this.http.get(USER_API).pipe(
      takeUntil(this.destroy$),
      tap((response: any) => console.log(response)),
      map((response: PassangerModel[]) => response)
    );
  }

  getPassenger(id: number | string): Observable<any> {
    return this.http.get(`${USER_API}/${id}`).pipe(
      map((response: any) => response),
      catchError((error: Error) => {
        throw of(error);
      })
    );
  }

  updatePassanger(id: number | string, passanger: any): Observable<any> {
    return this.http.put(`${USER_API}/${id}`, passanger).pipe(
      takeUntil(this.destroy$),
      map((response: any) => response)
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
