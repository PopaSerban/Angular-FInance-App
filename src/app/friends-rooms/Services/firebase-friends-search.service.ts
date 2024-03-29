import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Data } from "@angular/router";
import { Observable,map} from "rxjs";
import { IRoomClientData } from "../Models/IRoomClientData";


@Injectable({
  providedIn: 'root',
})
export class FirebaseFriendsSearchService {
  constructor(
    private readonly firebaseRealTimeDbService: AngularFireDatabase
  ) {}

  GetUsersList(): Observable<IRoomClientData[]> {
    return this.firebaseRealTimeDbService.list<any>('/users').valueChanges().pipe(
        map((users) => users.map(
          (user) =>
            ({
              ID: user.id,
              Email: user.email,
              Name: user.firstname,
              Surname: user.surname,
               ProfilePicture: user.profilePicture,
            } as IRoomClientData))
        ));
  }
  GetFilteredUsersList(searchTerm: string): Observable<IRoomClientData[]> {
  return this.firebaseRealTimeDbService.list<any>('/users').valueChanges().pipe(
    map((users) => users.filter((user) =>
      Object.values(user).join().includes(searchTerm)
    )),
    map((users) => users.map(
      (user) =>
        ({
          ID: user.id,
          Email: user.email,
          Name: user.firstname,
          Surname: user.surname,
          ProfilePicture: user.profilePicture,
        } as IRoomClientData))
    ));
}

}
