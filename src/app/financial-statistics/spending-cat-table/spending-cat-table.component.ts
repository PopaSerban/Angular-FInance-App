import { Component, OnInit } from '@angular/core';
import { ISpendings } from '../IData.model';
import { single } from '../Data/data';

@Component({
  selector: 'app-spending-cat-table',
  templateUrl: './spending-cat-table.component.html',
  styleUrls: ['./spending-cat-table.component.scss']
})
export class SpendingCatTableComponent implements OnInit {
  displayedColumns: string[] = ['name','value'];
  dataSource: ISpendings[]= single;

  constructor() { }

  ngOnInit(): void {
  }

}
