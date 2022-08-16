import { Component } from '@angular/core';
import { Athlete, ATHLETE_DATA } from './model/athlete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'basketball-app';
  athletes: Athlete[] = ATHLETE_DATA;
}
