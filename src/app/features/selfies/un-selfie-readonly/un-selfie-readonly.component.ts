import { Component, Input, OnInit } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-un-selfie-readonly',
  templateUrl: './un-selfie-readonly.component.html',
  styleUrls: ['./un-selfie-readonly.component.css']
})
export class UnSelfieReadonlyComponent implements OnInit {
  /**Si l'on passe en argument un tableau [ici dans selfie list]
   *  il faut venir
   *  l'initialiser avec l'annotation @Input
  **/
  @Input()
  public unSelfie : Selfie = null ;
  constructor() { }

  ngOnInit(){
  }

}
