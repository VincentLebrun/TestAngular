import { Component, Input, OnInit } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit {
  lesSelfies:Selfie[] = [
    {image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fanimal.memozee.com%2FArchOLD-7%2F1193645414.jpg&f=1&nofb=1' ,title:"Sacré beau pigeon", wookie : {name :"cheh", selfies:[]}},
    {image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qEyTg0eY7mUODPTxTf52EwHaE7%26pid%3DApi&f=1' ,title: "encore un ", wookie : {name :"cheh 2 ", selfies:[]}}
  ] ;
  @Input()
  set filter (value : string){
    console.log('Foo' , value)
  };
  constructor() { }

  ngOnInit(): void {
  }

}
