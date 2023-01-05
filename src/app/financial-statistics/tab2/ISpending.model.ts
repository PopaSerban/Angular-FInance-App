import { NgbDate } from "@ng-bootstrap/ng-bootstrap";
import { iTransaction } from "../Models/ITransaction.model";

export class Spending implements iTransaction{
    id:string;
    amount: number;
    category: string;
    date: string;
    notes: string;

    constructor(id:string,amount:number,category:string, date: string, notes:string){
        this.id = id
        this.amount = amount;
        this.category = category;
        this.date = date;
        this.notes = notes;
    }
}