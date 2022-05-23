import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-menu-general',
  templateUrl: './menu-general.component.html',
  styleUrls: ['./menu-general.component.css']
})
export class MenuGeneralComponent implements OnInit {
  @ViewChild('zoneRecherche' , {static :true})
  maZoneDeRecherche : ElementRef;
  constructor() { /* TODO document why this constructor is empty */  }
  //Bien faire attention à prendre le bon Event dans angular core
  @Output()
  research: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
    // TODO document why this method 'ngOnInit' is empty
  
  }
  rechercher () {
   const valeur = this.maZoneDeRecherche.nativeElement.value;
   this.research.emit(valeur);
  }

}
