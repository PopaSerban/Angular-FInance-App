import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { iTransaction } from "../Models/ITransaction.model";

export class Spending implements iTransaction{
    amount: number;
    category: string;
    date: string;
    notes: string;

    constructor(amount:number,category:string, date: string, notes:string){
        this.amount = amount;
        this.category = category;
        this.date = date;
        this.notes = notes;
    }
}