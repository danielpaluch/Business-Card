import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  
  constructor() { }

  color1 = 'red';
  color2 = 'green';
  color3 = 'blue';


  ngOnInit(): void {
  }

}
