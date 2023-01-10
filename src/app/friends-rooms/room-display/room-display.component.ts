import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookiesService } from 'src/app/Services/Cookies/cookies.service';
import { IRoomData } from '../Models/IRoomData';
import { FirebaseChatService } from '../Services/firebase-chat.service';
import { FirebaseRoomsService } from '../Services/firebase-rooms.service';

@Component({
  selector: 'app-room-display',
  templateUrl: './room-display.component.html',
  styleUrls: ['./room-display.component.scss']
})
export class RoomDisplayComponent implements OnInit {
  public distance: number = 2;
  public throttle: number = 1000;
  public UserID: string='';
  @Input() roomsList: IRoomData[]=[];

  constructor(private readonly cookieService: CookiesService, private readonly router: Router,
    private readonly firebaseChatService: FirebaseChatService,
    private readonly firebaseRoomService: FirebaseRoomsService) {
    this.UserID = this.cookieService.GetCookieData('id');
   }


  ngOnInit(): void {
   
  }

  OnScroll(){

  }
  OnAccess(roomID: string){
    this.firebaseChatService.InitialiseMessages(roomID);
    this.router.navigate(['messageRoom']);
  }
  async OnDelete(roomID:string){
    this.firebaseRoomService.DeleteSelectedRoom(roomID);
    await this.firebaseRoomService.GetUserRooms().then(roomList=>{
      this.roomsList = roomList;
    });
  }

}
