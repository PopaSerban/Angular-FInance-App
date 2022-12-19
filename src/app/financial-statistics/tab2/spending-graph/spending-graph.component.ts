import { Component, OnInit } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { dataLineChart } from '../../Data/dataLineChart';

@Component({
  selector: 'app-spending-graph',
  templateUrl: './spending-graph.component.html',
  styleUrls: ['./spending-graph.component.scss']
})
export class SpendingGraphComponent implements OnInit {

  dataLineChart: any[]=[];
  view: [number,number] = [370, 300];

  // options
  legend: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Below
  showLabels: boolean = false;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = false;
  showXAxisLabel: boolean = false;
  xAxisLabel: string = 'Days';
  yAxisLabel: string = 'Spendings';
  timeline: boolean = true;

  colorScheme = 'vivid'
  ngOnInit(): void {
  }

  constructor() {
    Object.assign(this, { dataLineChart });
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
    console.log(dataLineChart[0].series[0])
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
