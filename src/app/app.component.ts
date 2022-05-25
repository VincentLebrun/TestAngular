import { Component } from '@angular/core';
import { Selfie } from './models/selfie';
import { LoggerService } from './shared/services/logger/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  console = console;
  title = 'Selfie à Pigeon';
  subTitle = 'Voyons ce que celà fait ';
  logoAffiche = true;
  fieldValue = "";
  constructor(private loggerService: LoggerService) {

  }
  searchSelfies(value: string) {
    this.loggerService.log('toto', value);
    this.fieldValue = value;
  }
}
