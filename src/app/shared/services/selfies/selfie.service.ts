import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Selfie } from 'src/app/models/selfie';
import { Wookie } from 'src/app/models/wookie';
import { environment } from 'src/environments/environment';
import { LoggerService } from '../logger/logger.service';

/**
 * injection of service
 */
@Injectable({
  providedIn: 'root'
})
export class SelfieService {

  constructor(private _LoggerService: LoggerService, private _httpClient: HttpClient) { }
  /**
   * 
   * @returns return the total list of selfie 
   */
  getAll(): Selfie[] {

    const tab: Selfie[] = [];
    let selfie = new Selfie;
    selfie.image = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fanimal.memozee.com%2FArchOLD-7%2F1193645414.jpg&f=1&nofb=1";
    selfie.title = 'Sacré beau pigeon ';
    selfie.wookie = new Wookie();
    selfie.wookie.name = "Pigeon";
    tab.push(selfie);
    tab.push({
      image: '',
      title: 'Pigeon ',
      wookie: {
        name: 'Pigeon voyager ',
        selfies: []
      }
    })
    return tab;

  }
  getAll_asObservable(): Observable<Selfie[]> {
    // const myTab = this.getAll();
    // // return of(myTab);
    // return interval(1000).pipe(
    //   map(int => [
    //     {
    //       image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fanimal.memozee.com%2FArchOLD-7%2F1193645414.jpg&f=1&nofb=1",
    //       title: 'Pigeon ' + int,
    //       wookie: {
    //         name: 'Pigeon voyager ',
    //         selfies: []
    //       }
    //     }
    //   ])
    // );
    return this._httpClient.get<Selfie[]>(environment.apis.selfies.url);
  }
}
