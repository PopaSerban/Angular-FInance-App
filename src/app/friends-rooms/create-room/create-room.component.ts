import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { CookiesService } from 'src/app/Services/Cookies/cookies.service';
import { IRoomClientData } from '../Models/IRoomClientData';
import { IRoomData } from '../Models/IRoomData';
import { IRoomUser } from '../Models/IRoomUser';
import { FirebaseRoomsService } from '../Services/firebase-rooms.service';
@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.scss']
})
export class CreateRoomComponent implements OnInit {

  private activeUser: IRoomUser;
  private selectedUser: IRoomUser;
  form: FormGroup = new FormGroup({});

  constructor(private readonly cookieService: CookiesService,
    private readonly firebaseRoomsService: FirebaseRoomsService,
    private readonly router: Router) { 
    this.activeUser= {
      id: this.cookieService.GetCookieData('id'),
      name: this.cookieService.GetCookieData('surname'),
      profilePicture: this.cookieService.GetCookieData('profilePicture')
    }
    this.selectedUser ={id:'',name:'',profilePicture:''};
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      roomName: new FormControl(''),
      description: new FormControl(''),
      userId: new FormControl(''),
      userProfilePic: new FormControl(''),
      roomId: new FormControl(''),
      userNames: new FormArray([new FormControl(''), new FormControl('')])
    });
  }

  onSubmit() {
    console.log(this.form.value);
    this.selectedUser
    const roomData: IRoomData = {
      roomId: this.form.controls['roomId'].value,
      name: this.form.controls['roomName'].value,
      description: this.form.controls['description'].value,
      users: [this.activeUser, this.selectedUser]
    };
    this.firebaseRoomsService.CreateRoom(roomData);
    this.router.navigate(['budgetRooms'])

  }
  onUserSelected(user: IRoomClientData){
    if (typeof user === 'undefined'){
      this.selectedUser ={id:'',name:'',profilePicture:''};
      this.form.controls['userId'].setValue('');
      this.form.controls['roomId'].setValue('');
      this.form.controls['userProfilePic'].setValue('');
      this.form.controls['userNames'].setValue(['','']);
      return;
    }
    this.selectedUser = {
      id: `${user.ID}`,
      name: user.Surname,
      profilePicture: user.ProfilePicture

    }
    this.form.controls['userId'].setValue(user.ID);
    this.form.controls['userProfilePic'].setValue(user.ProfilePicture);
    this.form.controls['roomId'].setValue(`${this.activeUser.id}${this.selectedUser.id}`);
    this.form.controls['userNames'].setValue([this.activeUser.name,this.selectedUser.name]);

    console.log(user.ID);
  }
}
