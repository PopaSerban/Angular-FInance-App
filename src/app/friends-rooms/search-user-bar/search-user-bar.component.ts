import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { IRoomClientData } from '../Models/IRoomClientData';
import { FirebaseFriendsSearchService } from '../Services/firebase-friends-search.service';

@Component({
  selector: 'app-search-user-bar',
  templateUrl: './search-user-bar.component.html',
  styleUrls: ['./search-user-bar.component.scss']
})
export class SearchUserBarComponent implements OnInit {
  selectedUser: any;
  query: string = '';
  searchTerm:string = '';
  usersList: IRoomClientData[] = [];
  filteredUsers: IRoomClientData[] = []
  altImage: string = 'https://firebasestorage.googleapis.com/v0/b/budget-app-77595.appspot.com/o/585e4beacb11b227491c3399.png?alt=media&token=b8687ad0-a703-4e88-b76d-1b4e0d1edb8b';

  @Output() userSelected = new EventEmitter<IRoomClientData>();

  constructor(private readonly firebaseFriendsSearchService: FirebaseFriendsSearchService) { }

  ngOnInit() {
    this.firebaseFriendsSearchService.GetUsersList().subscribe(users => {
      this.usersList = users;
    });
  }

  OnSearch() {
    if(this.searchTerm){
      this.firebaseFriendsSearchService.GetFilteredUsersList(this.searchTerm).subscribe(filteredUsers=>{
        this.filteredUsers = filteredUsers.slice(0,5);
      });
    }else{
      this.filteredUsers = [];
    }
  }

 

  selectUser(user:IRoomClientData) {
    this.selectedUser = user;
    this.filteredUsers= [];
    this.userSelected.emit(user);
  }

  deselectUser() {
    this.selectedUser = null;
    this.searchTerm = '';
    this.userSelected.emit();
  }

}
