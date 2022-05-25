import { Injectable } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';
import { Wookie } from 'src/app/models/wookie';

/**
 * injection of service
 */
@Injectable({
  providedIn: 'root'
})
export class SelfieService {

  constructor() { }
  /**
   * 
   * @returns return the total list of selfie 
   */
  getAll(): Selfie[] {

    const tab: Selfie[] = [];
    let selfie = new Selfie;
    selfie.image = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fanimal.memozee.com%2FArchOLD-7%2F1193645414.jpg&f=1&nofb=1";
    selfie.title = 'Yata';
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
}
