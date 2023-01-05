import { Injectable } from '@angular/core';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Spending } from '../tab2/ISpending.model';
import { FireBaseUserTransactionsService } from './firebase-transactions.service';

@Injectable({
    providedIn: 'root'
})
export class SpendingsService{
    spendingListChanged = new Subject<Spending[]>();
    private SpendingList: Spending[] = [];

    constructor(private readonly firebaseTransactionService:FireBaseUserTransactionsService){
        this.InitialiseUserTransactions();
    }

    async InitialiseUserTransactions(){
        this.SpendingList = await this.firebaseTransactionService.getAll();
        this.spendingListChanged.next(this.SpendingList.slice());

    }

    AddSpending(spending: Spending){
         this.firebaseTransactionService.CreateTransaction(spending).then(resp=>{
            spending.id = resp;
            console.log(spending)
            this.SpendingList.unshift(spending);
            this.spendingListChanged.next(this.SpendingList.slice());
        });
    }
    DeleteSpending(spending:Spending){
        this.firebaseTransactionService.DeleteTransaction(spending.id);
        this.SpendingList.splice(this.SpendingList.indexOf(spending),1);
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
         return new Spending('',amount, category, formatedDate,notes);
    }

}
