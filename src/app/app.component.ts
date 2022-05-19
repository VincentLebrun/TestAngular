import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie à wookie';
  subTitle = 'Voyons ce que celà fait ';
  logoAffiche = true;
  lesSelfies:string[] = ['test1 ', "test2"] 
}
