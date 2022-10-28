import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
import { User } from "../login/user.model";
import { UserInformation } from "../shared/models/userInformation.model";


@Injectable({
    providedIn: 'root'
  })
  export class FireBaseDatabaseService {

    constructor(private readonly httpRequest:HttpClient){}

    RegisterUser(userData: UserInformation){
        userData.Id = this.HashCode(userData.Id).toString();
        return this.httpRequest.put(`https://budget-app-77595-default-rtdb.firebaseio.com/users/`+userData.Id+`.json`,userData);
    }

    GetUserData(userId: number){
        return this.httpRequest.get<UserInformation>(`https://budget-app-77595-default-rtdb.firebaseio.com/users/${userId}.json`)
        .pipe(map(userDataResponse=> Object.assign(new UserInformation, userDataResponse)));
    }

    UpdateUserData(userId: string, userData: UserInformation){
        return this.httpRequest.patch(`https://budget-app-77595-default-rtdb.firebaseio.com/users/${userId}.json`, userData);

    }


    //ToDO - HashCode is inefficient.. very... need to find another solution
    private HashCode(str: string): number {
        var h: number = 0;
        for (var i = 0; i < str.length; i++) {
            h = 31 * h + str.charCodeAt(i);
        }
        return h & 0xFFFFFFFF
    }
    public GetUserID(userEmail: string):number{
        return this.HashCode(userEmail);
    }
  }