import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpendingsService } from '../../Services/spendings.service';
import { Spending } from '../ISpending.model';

@Component({
  selector: 'app-spendings-record-table',
  templateUrl: './spendings-record-table.component.html',
  styleUrls: ['./spendings-record-table.component.scss']
})
export class SpendingsRecordTableComponent implements OnInit, OnDestroy {
  searchInput: String = '';
  spendingServiceSubscription : Subscription = new Subscription();
  data = [
    {Category:'Food', Date: '12.12.2022', Amounth: 5.05},
    {Category:'Bill', Date: '11.12.2022', Amounth: 25.21},
    {Category:'Bill', Date: '13.12.2022', Amounth: 34.06},
    {Category:'Food', Date: '14.12.2022', Amounth: 19.08},
    {Category:'Coffee', Date: '15.12.2022', Amounth: 0.99}
  ];
  spendingList: Spending[] = [];

  constructor(private readonly spendingServie: SpendingsService) { }


  ngOnInit(): void {
    this.spendingServiceSubscription = this.spendingServie.spendingListChanged.subscribe(
      (spendings: Spending[])=>{
        this.spendingList=spendings;
      });
      this.spendingList = this.spendingServie.GetSpendingList();
  }

  ngOnDestroy(){
    this.spendingServiceSubscription.unsubscribe();
  }

}
