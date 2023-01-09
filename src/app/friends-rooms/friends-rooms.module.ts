import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RoomsMainScreenComponent } from './rooms-main-screen/rooms-main-screen.component';
import { SearchUserBarComponent } from './search-user-bar/search-user-bar.component';
import { CreateRoomComponent } from './create-room/create-room.component';
import { RoomDisplayComponent } from './room-display/room-display.component';
import { MatCardModule } from '@angular/material/card';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    RoomsMainScreenComponent,
    SearchUserBarComponent,
    CreateRoomComponent,
    RoomDisplayComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    InfiniteScrollModule,
    MatButtonModule,
  ],
})
export class FriendsRoomsModule { }
