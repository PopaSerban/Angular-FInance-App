import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SpendingsService } from '../Services/spendings.service';
import { Spending } from '../tab2/ISpending.model';

@Component({
  selector: 'app-spendings-pop-up',
  templateUrl: './spendings-pop-up.component.html',
  styleUrls: ['./spendings-pop-up.component.scss']
})
export class SpendingsPopUpComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data:Spending,
   private matDialogReff: MatDialogRef<SpendingsPopUpComponent>,
   private spendingService: SpendingsService) { }

  ngOnInit(): void {
  }

  OnCloseButton(){
    this.matDialogReff.close();
  }
  OnDeleteButton(){
    console.log(this.data.id)
    this.spendingService.DeleteSpending(this.data);
    this.matDialogReff.close();
  }

}
