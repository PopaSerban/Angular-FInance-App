import { Component, OnInit } from '@angular/core';
import {single} from '../../Data/data'
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-spending-cards',
  templateUrl: './spending-cards.component.html',
  styleUrls: ['./spending-cards.component.scss']
})
export class SpendingCardsComponent implements OnInit {

  single: any[]=[];
  view: [number, number] = [400, 400];

  // colorScheme: Color = {
  //   name: 'myScheme',
  //   selectable: true,
  //   group: ScaleType.Ordinal,
  //   domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'],
  // };

  colorScheme: string = 'vivid';
  // cardColor: string = '#232837';
  cardColor: string = '#232837';
  textColor: string = 'black';
  style="fill: yellow;"
  
  constructor() {
    Object.assign(this, { single });
  }

  onSelect(event:any) {
    console.log(event);
  }

  ngOnInit(): void {
  }

}
