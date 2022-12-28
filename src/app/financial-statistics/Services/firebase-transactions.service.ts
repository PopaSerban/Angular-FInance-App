import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CookiesService } from 'src/app/Services/Cookies/cookies.service';
import { iTransaction } from '../Models/ITransaction.model';
  

@Injectable({
    providedIn: 'root',
  })
export class FireBaseUserTransactionsService{
    private UserId: string = '';

    constructor(private readonly cookieService: CookiesService,private firestoreService:AngularFirestore) {
        this.UserId = this.cookieService.GetCookieData('id');
        this.CreateUserHistory(this.UserId)
      }
    async getAll() {
        const transactions: iTransaction[] = []
        await this.firestoreService.collection('Transactions').doc(this.UserId).collection('History').ref
        .where('amount','!=','null')
        .get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
              const data = doc.data();
              transactions.push({
                amount: data['amount'],
                category: data['category'],
                date: data['date'],
                notes:data['notes']
              } as iTransaction);
            });
          });
        return transactions;
    }

    CreateTransaction(transaction: iTransaction) {
        console.log('start adding transaction');
        this.firestoreService.collection('Transactions').doc(this.UserId).collection('History').add({
            amount: transaction.amount,
            category:transaction.category,
            date: transaction.date,
            notes: transaction.notes
        });
      }

    async CreateUserHistory(userId: string) {
        console.log('starting update');
        let userExists= false;
        let historyExists = false;
        await this.firestoreService.collection('Transactions').doc(userId)
        .get().subscribe(document=>{
            userExists = document.exists;
        });
        if(!userExists){
            await this.firestoreService.collection('Transactions').doc(userId).set({});
        }
        await this.firestoreService.collection('Transactions').doc(userId).collection('History').doc('*').
        get().subscribe(historyDoc=>{
            historyExists = historyDoc.exists;
        });
        await this.firestoreService.collection('Transactions').doc(userId).collection('History').ref
        .get().then(querySnapshot => {
            historyExists = !querySnapshot.empty;
          });

        if(!historyExists){
            console.log('called');
            await this.firestoreService.collection('Transactions').doc(userId).collection('History').add({});
    }

  }
}