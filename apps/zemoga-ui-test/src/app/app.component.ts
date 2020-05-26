import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'zut-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = EMPTY;
  constructor(private http: HttpClient) {}
}
