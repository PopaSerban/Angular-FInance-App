import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { SpendingsService } from '../../Services/spendings.service';

@Component({
  selector: 'app-spending-form',
  templateUrl: './spending-form.component.html',
  styleUrls: ['./spending-form.component.scss']
})
export class SpendingFormComponent implements OnInit {
  isAddCategoryOpened: boolean = false;
  isCalendarOpened: boolean = false;
  selectedDate = Date.now();
  ExpensesForm: FormGroup = new FormGroup({});
  categories: string[] = ['None','food','bills','coffee','car','beer'];
  model: NgbDateStruct = new NgbDate(new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate());
  newCategory: string = '';

  constructor( private readonly spendingService:SpendingsService) { }

  ngOnInit(): void {
    this.InitForm();
  }

  private InitForm(){
    this.ExpensesForm = new FormGroup({
      'typeAmountX': new FormControl(null,[Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]),
      'typeCategoryX': new FormControl('None',[Validators.required]),
      'typeDateX': new FormControl(null),
      'typeNotesX': new FormControl(null)
    })
  }
  OnExpenseSubmited(){ 
      const amount = this.ExpensesForm.controls['typeAmountX'].value
      const category = this.ExpensesForm.controls['typeCategoryX'].value
      const date = this.ExpensesForm.controls['typeDateX'].value
      const notes = this.ExpensesForm.controls['typeNotesX'].value
  
      this.ExpensesForm.controls['typeDateX'].value? this.SendSpendingToService(amount, category, date, notes) : this.SendSpendingToService(amount,category,
      new NgbDate(new Date().getFullYear(),new Date().getMonth()+1,new Date().getDate()),notes);

    this.ExpensesForm.reset();
  }

  showCalendar(){
    this.isCalendarOpened = !this.isCalendarOpened;
  }

  OnEnableCategory(){
    this.isAddCategoryOpened= !this.isAddCategoryOpened;
  }

  OnAddCategory(){
    console.log(this.newCategory);
    if(this.newCategory){
      this.categories.unshift(this.newCategory);
      this.newCategory  = '';
      this.isAddCategoryOpened= !this.isAddCategoryOpened;
    }
  }
  private SendSpendingToService(amount:number, category:string, date:NgbDate, notes:string){
    this.spendingService.AddSpending(
      this.spendingService.CreateSpendingObject(amount, category, date, notes));
  }

}
