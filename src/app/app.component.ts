import { Component } from '@angular/core';
import { Selfie } from './models/selfie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  console = console;
  title = 'Selfie à wookie';
  subTitle = 'Voyons ce que celà fait ';
  logoAffiche = true;
}
