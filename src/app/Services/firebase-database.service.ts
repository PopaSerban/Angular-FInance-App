import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, tap } from "rxjs";
import { FirebaseRoomsService } from "../friends-rooms/Services/firebase-rooms.service";
import { UserInformation } from "../shared/models/userInformation.model";
import { CookiesService } from "./Cookies/cookies.service";


@Injectable({
    providedIn: 'root'
  })
  export class FireBaseDatabaseService {

    constructor(
        private readonly httpRequest:HttpClient,
        private readonly cookieService: CookiesService,
        private readonly firebaseRoomsService: FirebaseRoomsService){}

    RegisterUser(userData: UserInformation){
        this.cookieService.DeleteAllCookies();
        this.cookieService.setCookieMultipleData(userData);
        return this.httpRequest.put(`https://budget-app-77595-default-rtdb.firebaseio.com/users/`+userData.Id+`.json`,userData);
    }

    GetUserData(userId: number){
        this.cookieService.DeleteAllCookies();
        return this.httpRequest.get<UserInformation>(`https://budget-app-77595-default-rtdb.firebaseio.com/users/${userId}.json`)
        .pipe(tap(userDataResponse=> this.cookieService.setCookieMultipleData(userDataResponse)),
        map(userDataResponse=> Object.assign(new UserInformation, userDataResponse)));
    }

    UpdateUserData(userId: string, userData: UserInformation){
        this.cookieService.setCookieMultipleData(userData);
        this.firebaseRoomsService.UpdateUserRoomsName(userId,userData.Surname);
        return this.httpRequest.patch(`https://budget-app-77595-default-rtdb.firebaseio.com/users/${userId}.json`, userData);
    }

    private HashCode(str: string): number {
        var h: number = 0;
        for (var i = 0; i < str.length; i++) {
            h = Math.imul(31,h) + str.charCodeAt(i);
        }
        return h;
    }
    public GetUserID(userEmail: string):number{
        return this.HashCode(userEmail);
    }
  }