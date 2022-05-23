import { Component, OnInit } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit {
  lesSelfies:Selfie[] = [
    {image: '' ,title:"Sacré beau pigeon", wookie : {name :"cheh", selfies:[]}},
    {image: '' ,title: "encore un ", wookie : {name :"cheh 2 ", selfies:[]}}
  ] ;
  constructor() { }

  ngOnInit(): void {
  }

}
