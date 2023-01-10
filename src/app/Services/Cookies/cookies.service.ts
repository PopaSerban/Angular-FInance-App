import { Injectable } from "@angular/core";
import { CookieService } from "ngx-cookie-service";

@Injectable({
    providedIn: 'root'
})
export class CookiesService {
    constructor(private readonly cookieService: CookieService){}

    isCookieEmpty():boolean{
        return this.cookieService.check('id');
    }
    setCookieData(key:string, data:string){
        this.cookieService.set(key,data);
    }
    setCookieMultipleData(dataObject:any){
        for (const key in dataObject) {
            if (Object.prototype.hasOwnProperty.call(dataObject, key)) {
                this.cookieService.set(key, dataObject[key]);
            }
        }
    }
    DeleteCookieData(dataKey: string){
        this.cookieService.delete(dataKey);
    }
    GetCookieData(dataKey: string) : string{
        return this.cookieService.get(dataKey);
    }
    GetAllCookieData(){
        return this.cookieService.getAll();
    }
    DeleteAllCookies(){
        this.cookieService.deleteAll();
    }
}


