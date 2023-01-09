import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRoomData } from '../Models/IRoomData';
import { FirebaseRoomsService } from '../Services/firebase-rooms.service';

@Component({
  selector: 'app-rooms-main-screen',
  templateUrl: './rooms-main-screen.component.html',
  styleUrls: ['./rooms-main-screen.component.scss']
})
export class RoomsMainScreenComponent implements OnInit {
  contextText: string = 'Chat rooms are a way to communicate with your friends, send them money request, split bills and communicate achievements! Try this feature by clicking the button below';
  roomsList: IRoomData[] =[];
  roomsAvailable: boolean = true;
  constructor(private readonly router: Router, private readonly firebaseRoomsService: FirebaseRoomsService) { }

   ngOnInit() {
    this.GetUserRooms();
    console.log('main called');
  }
   async GetUserRooms(){
    this.roomsList = await this.firebaseRoomsService.GetUserRooms();
    console.log(this.roomsList)
    if(this.roomsList.length == 0){ this.roomsAvailable = false;}
  }

  OnSubmit(){
    this.router.navigate(['roomCreation']);
  }
}
