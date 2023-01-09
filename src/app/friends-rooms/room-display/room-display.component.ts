import { Component, Input, OnInit } from '@angular/core';
import { CookiesService } from 'src/app/Services/Cookies/cookies.service';
import { IRoomData } from '../Models/IRoomData';

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

  constructor(private readonly cookieService: CookiesService) {
    this.UserID = this.cookieService.GetCookieData('id');

   }


  ngOnInit(): void {
    console.log('display called');
  }

  OnScroll(){

  }

}
