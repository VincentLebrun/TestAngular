import { Component, OnInit } from '@angular/core';
import { Selfie } from 'src/app/models/selfie';

@Component({
  selector: 'app-selfie-list',
  templateUrl: './selfie-list.component.html',
  styleUrls: ['./selfie-list.component.css']
})
export class SelfieListComponent implements OnInit {
  lesSelfies:Selfie[] = [
    {image: '' , wookie : {name :"cheh", selfies:[]}},
    {image: '' , wookie : {name :"cheh 2 ", selfies:[]}}
  ] ;
  constructor() { }

  ngOnInit(): void {
  }

}
