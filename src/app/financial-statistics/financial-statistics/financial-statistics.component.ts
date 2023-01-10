import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-financial-statistics',
  templateUrl: './financial-statistics.component.html',
  styleUrls: ['./financial-statistics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FinancialStatisticsComponent implements OnInit {
  tabNumber: number = 0;
  constructor() { }

  ngOnInit(): void {

  }

  OnSelectedTab($event:any){
    console.log($event.index);
    this.tabNumber = $event.index
  }
  OnSwipe(evt:any){
    console.log(evt);
    const x = Math.abs(evt.deltaX) > 40 ? (evt.deltaX > 0 ? 1 : -1):0;
    this.tabNumber = this.tabNumber+x;

  }

}
