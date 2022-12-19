import { NgbDate } from "@ng-bootstrap/ng-bootstrap";

export class Spending{
    price: number;
    category: string;
    date: string;
    notes: string;

    constructor(price:number,category:string, date: string, notes:string){
        this.price = price;
        this.category = category;
        this.date = date;
        this.notes = notes;
    }
}