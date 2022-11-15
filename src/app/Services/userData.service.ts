import { Observable, of, Subject } from "rxjs";
import { Injectable, OnInit } from "@angular/core";
import { UserInformation } from "../shared/models/userInformation.model";
import { FireBaseDatabaseService } from "./firebase-database.service";

@Injectable({
    providedIn: 'root'
  })
  export class UserDataService{
    public _loggedUserData: UserInformation = new UserInformation;
    public userDataChanged = new Subject<UserInformation>();

        constructor(
          private firebaseDatabaseService: FireBaseDatabaseService){

        }

      get GetLoggedUserData(): Observable<UserInformation>{
        console.log('getting localuserdata');
        console.log(this._loggedUserData);
        const loggedUserData = of(this._loggedUserData);
        return loggedUserData;
      }

      public LoggedUserDataPartial(userData: any){
        let key: keyof typeof userData;
        type serviceKey = keyof typeof this._loggedUserData;
          for(key in userData){
              if(this._loggedUserData.hasOwnProperty(key) && userData[key].length != 0){
                  const value = key as serviceKey
                  this._loggedUserData[value] = userData[key];
              }
          }
          this.firebaseDatabaseService.UpdateUserData(this._loggedUserData.Id, this._loggedUserData).subscribe(response=>{});
          this.userDataChanged.next(this._loggedUserData);
      }


      public SetLoggedUserData(userData: UserInformation){
        this._loggedUserData = userData;
        this.userDataChanged.next(this._loggedUserData);
      }



    
  }