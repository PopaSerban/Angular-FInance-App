import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms-main-screen',
  templateUrl: './rooms-main-screen.component.html',
  styleUrls: ['./rooms-main-screen.component.scss']
})
export class RoomsMainScreenComponent implements OnInit {
  contextText: string = 'Chat rooms are a way to communicate with your friends, send them money request, split bills and communicate achievements! Try this feature by clicking the button below'
  constructor() { }

  ngOnInit(): void {
  }

  OnSubmit(){
    
  }
}
