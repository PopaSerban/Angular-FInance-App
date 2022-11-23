import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-room',
  templateUrl: './budget-room.component.html',
  styleUrls: ['./budget-room.component.scss']
})
export class BudgetRoomComponent implements OnInit {
  public distance: number = 2;
  public throttle: number = 1000;
  public RoomsList= [
    {roomName:'Room With 2',description:"Trip Budget",usersNumber:2,usersNames:['Serban','Cata'] },
    {roomName:'Room With 2',description:"Trip Budget",usersNumber:2,usersNames:['Serban','Cata'] },
    {roomName:'Room With 2',description:"Trip Budget",usersNumber:2,usersNames:['Serban','Cata'] },
    {roomName:'Room With 3',description:"Birthday Budget",usersNumber:3,usersNames:['Serban','Cata','Cristina'] },
    {roomName:'Room With 4',description:"Christmas Budget",usersNumber:4,usersNames:['Serban','Cata','Cristina','Tata'] }
  ];
  constructor() { }


  ngOnInit(): void {
  }

  OnScroll(){

  }

}
