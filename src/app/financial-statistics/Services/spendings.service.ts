import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Spending } from '../tab2/ISpending.model';


@Injectable({
    providedIn: 'root'
})
export class SpendingsService{
    spendingListChanged = new Subject<Spending[]>();
    private SpendingList: Spending[] = [];


    AddSpending(spending: Spending){
        this.SpendingList.unshift(spending);
        console.log(this.SpendingList);
        this.spendingListChanged.next(this.SpendingList.slice());
    }
    GetSpendingList(){
        return this.SpendingList.slice();
    }
    SetSpendingList(spendingList:Spending[]){
        this.SpendingList = spendingList;
        this.spendingListChanged.next(this.SpendingList.slice());
    }

    CreateSpendingObject(amount: number, category:string, date: NgbDate,notes: string){
         let formatedDate = `${date.day}.${date.month}.${date.year}`;
         return new Spending(amount, category, formatedDate,notes);
    }
}
