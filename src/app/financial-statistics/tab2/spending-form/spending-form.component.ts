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
  isCalendarOpened: boolean = false;
  selectedDate = Date.now();
  ExpensesForm: FormGroup = new FormGroup({});
  categories: string[] = ['None','food','bills','coffee','car','beer'];
  model: NgbDateStruct = new NgbDate(2020,10,10);
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
    console.log(this.ExpensesForm.controls);
    this.spendingService.AddSpending(
      this.spendingService.CreateSpendingObject(
        this.ExpensesForm.controls['typeAmountX'].value,
        this.ExpensesForm.controls['typeCategoryX'].value,
        this.ExpensesForm.controls['typeDateX'].value,
        this.ExpensesForm.controls['typeNotesX'].value
      ));
    this.ExpensesForm.reset();
  }

  showCalendar(){
    this.isCalendarOpened = !this.isCalendarOpened;
  }

  OnAddCategory(){
    console.log(this.newCategory);
    if(this.newCategory){
      this.categories.push(this.newCategory);
      this.newCategory  = '';
    }
  }

}
