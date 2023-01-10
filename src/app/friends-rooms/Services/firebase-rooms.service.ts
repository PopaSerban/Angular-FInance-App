import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, Subject } from 'rxjs';
import { CookiesService } from 'src/app/Services/Cookies/cookies.service';
import { IRoomData } from '../Models/IRoomData';
import { IRoomUser } from '../Models/IRoomUser';
import { FirebaseChatService } from './firebase-chat.service';

@Injectable({
  providedIn: 'root'
})
export class FirebaseRoomsService {
  private UserId: string = ''
  private roomsSubject = new Subject<IRoomData[]>();

  constructor(private readonly firestoreDatabaseService: AngularFirestore,
    private readonly firestoreChatService: FirebaseChatService,
    private readonly cookieService: CookiesService) { 
      this.UserId = '';
      this.GetUserRooms();
    }

  async CheckUserRooms(){
    let roomExists= false;
    await this.firestoreDatabaseService.collection('Rooms').ref.get().then(querySnapshot=>{
      querySnapshot.forEach(doc=>{
        if(doc.id.includes(this.UserId)){
          roomExists= true;
        }
      });
    });
    return roomExists;
  }
  async CreateRoom(roomData:IRoomData){
    const querySnapshot = await this.firestoreDatabaseService.collection('Rooms').ref.get();
    querySnapshot.forEach(room=>{
        if(room.id.includes(roomData.roomId)){
          roomData.roomId = roomData.roomId+'1';
        }
      });
    await this.firestoreDatabaseService.collection('Rooms').doc(roomData.roomId).set(roomData);
  }

  async GetUserRooms(){
    this.UserId = this.cookieService.GetCookieData('id');
    const rooms: IRoomData[] = [];
    const querySnapshot = await this.firestoreDatabaseService.collection('Rooms').ref.get();
    querySnapshot.forEach(room=>{
        if(room.id.includes(this.UserId)){
          const data = room.data() as {[key: string]: any};
          rooms.push({
            roomId: room.id,
            name: data['name'],
            description: data['description'],
            users: data['users']
          } as IRoomData)}
      });
    return rooms;
  }
  async UpdateUserRoomsProfilePicture(userId:string, userProfilePicture:string){
    const querySnapshot = await this.firestoreDatabaseService.collection('Rooms').ref.get();
    querySnapshot.forEach(room=>{
        if(room.id.includes(userId)){
          const userData = room.data() as {[key:string]: string}
          const users:IRoomUser[] = userData['users'] as unknown as IRoomUser[];
          const userIndex = users.findIndex(user=>user.id===`${userId}`);
          users[userIndex].profilePicture = userProfilePicture;
          const roomSnapshot = this.firestoreDatabaseService.collection('Rooms').doc(room.id);
          roomSnapshot.update({
            users: users
          });
        }
      });
  }

  async UpdateUserRoomsName(userId:string, userName: string){
    const querySnapshot = await this.firestoreDatabaseService.collection('Rooms').ref.get();
    querySnapshot.forEach(room=>{
        if(room.id.includes(userId)){
          const userData = room.data() as {[key:string]: string}
          const users:IRoomUser[] = userData['users'] as unknown as IRoomUser[];
          const userIndex = users.findIndex(user=>user.id === `${userId}`);
          users[userIndex].name = userName;
          const roomSnapshot = this.firestoreDatabaseService.collection('Rooms').doc(room.id);
          roomSnapshot.update({
            users: users
          });
        }
      });
  }

  async DeleteSelectedRoom(roomId: string){
    this.firestoreChatService.DeleteMessages(roomId);
    await this.firestoreDatabaseService.collection('Rooms').doc(roomId).delete();
  }



}
