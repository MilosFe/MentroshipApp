import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Subscription, map, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  debounceTime,
  pluck,
  distinctUntilChanged,
  switchMap,
  catchError,
  tap,
} from 'rxjs/operators';
const BASE_URL = 'https://api.openbrewerydb.org/breweries';
@Component({
  selector: 'app-typeahead',
  templateUrl: './typeahead.component.html',
  styleUrls: ['./typeahead.component.scss'],
})
export class TypeaheadComponent implements OnInit {
  subscription!: Subscription;
  beers!: any[];
  files!: any[];
  title = 'milos';
  @ViewChild('coffe') beer!: ElementRef;
  constructor() {}

  ngOnInit(): void {
    this.files = [
      { name: 'logo.svg', size: 2120109, type: 'image/svg' },
      { name: 'banner.jpg', size: 18029, type: 'image/jpg' },
      { name: 'background.png', size: 1784562, type: 'image/png' },
    ];
  }

  ngAfterViewInit(): void {
    console.log('after view init');
    this.subscription = fromEvent(this.beer.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(9000),
        switchMap((searchTerm) =>
          ajax.getJSON(`${BASE_URL}?by_name=${searchTerm}`)
        )
      )
      .subscribe((value: any) => {
        console.log(value);
        this.beers = value;
      });
  }

  get(event: any) {
    console.log(event.target.value);
  }
}
