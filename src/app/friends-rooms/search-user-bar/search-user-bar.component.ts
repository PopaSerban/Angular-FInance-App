import { Component, OnInit } from '@angular/core';
import { user } from '@angular/fire/auth';
import { IRoomClientData } from '../Models/IRoomClientData';
import { FirebaseFriendsSearchService } from '../Services/firebase-friends-search.service';

@Component({
  selector: 'app-search-user-bar',
  templateUrl: './search-user-bar.component.html',
  styleUrls: ['./search-user-bar.component.scss']
})
export class SearchUserBarComponent implements OnInit {
  query: string = '';
  usersList: IRoomClientData[] = [];

  constructor(private readonly firebaseFriendsSearchService: FirebaseFriendsSearchService) { }

  ngOnInit() {
    this.firebaseFriendsSearchService.GetUsersList().subscribe(users => {
      this.usersList = users;
    });
  }

  search() {

  }

  onClick() {

  }

}
