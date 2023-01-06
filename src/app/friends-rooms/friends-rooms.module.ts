import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsMainScreenComponent } from './rooms-main-screen/rooms-main-screen.component';
import { SearchUserBarComponent } from './search-user-bar/search-user-bar.component';

@NgModule({
  declarations: [
    RoomsMainScreenComponent,
    SearchUserBarComponent
  ],
  imports: [
    NgModule,
    CommonModule,
  ],
  exports:[ SearchUserBarComponent]
})
export class FriendsRoomsModule { }
