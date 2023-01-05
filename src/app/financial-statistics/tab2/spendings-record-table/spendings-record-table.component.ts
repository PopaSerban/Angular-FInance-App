import { Component, Inject, inject, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SpendingsService } from '../../Services/spendings.service';
import { Spending } from '../ISpending.model';
import { MatDialog } from '@angular/material/dialog';
import { SpendingsPopUpComponent } from '../../spendings-pop-up/spendings-pop-up.component';

@Component({
  selector: 'app-spendings-record-table',
  templateUrl: './spendings-record-table.component.html',
  styleUrls: ['./spendings-record-table.component.scss']
})
export class SpendingsRecordTableComponent implements OnInit, OnDestroy {

  currentPage: number = 1;
  itemsPerPage:number = 6;
  isShowMoreIndex: number = -1;

  searchInput: String = '';
  spendingServiceSubscription : Subscription = new Subscription();
  confirmBoxSubscription: Subscription = new Subscription();
  spendingList: Spending[] = [];

  constructor(private readonly spendingServie: SpendingsService, private readonly matDialog:MatDialog) { }


  ngOnInit(): void {
    this.spendingServiceSubscription = this.spendingServie.spendingListChanged.subscribe(
      (spendings: Spending[])=>{
        this.spendingList=spendings;
      });
      this.spendingList = this.spendingServie.GetSpendingList();
      
  }

  GetTotalPages() {
    return Math.ceil(this.spendingList.length / this.itemsPerPage);
    
  }

  ngOnDestroy(){
    this.spendingServiceSubscription.unsubscribe();
  }

  PreviousPage(){
    this.currentPage--;
  }

  NextPage(){
    this.currentPage++;
    
  }
  ToggleMoreDetails(index: number){
    this.isShowMoreIndex != index ? this.isShowMoreIndex=index: this.isShowMoreIndex=-1
  }
  DeleteTransaction(item:Spending){
    this.matDialog.open(SpendingsPopUpComponent,{
      data:item  
    })
    
  }
  
}
