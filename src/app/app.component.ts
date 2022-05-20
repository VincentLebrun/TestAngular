import { Component } from '@angular/core';
import { Selfie } from './models/selfie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie à wookie';
  subTitle = 'Voyons ce que celà fait ';
  logoAffiche = true;
  lesSelfies:Selfie[] = [
    {image: '' , wookie : {name :"cheh", selfies:[]}},
    {image: '' , wookie : {name :"cheh 2 ", selfies:[]}}
  ] ;
}
