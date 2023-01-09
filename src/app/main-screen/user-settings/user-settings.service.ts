import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FirebaseRoomsService } from 'src/app/friends-rooms/Services/firebase-rooms.service';
import { CookiesService } from 'src/app/Services/Cookies/cookies.service';
import { UserDataService } from 'src/app/Services/userData.service';
import { UserInformation } from 'src/app/shared/models/userInformation.model';

@Injectable({
  providedIn: 'root'
})
export class UserSettingsService implements OnInit{
    userProfilePictureChanged = new Subject<String>();
    userProfilePicture:string ='https://lh3.googleusercontent.com/LfmMVU71g-HKXTCP_QWlDOemmWg4Dn1rJjxeEsZKMNaQprgunDTtEuzmcwUBgupKQVTuP0vczT9bH32ywaF7h68mF-osUSBAeM6MxyhvJhG6HKZMTYjgEv3WkWCfLB7czfODidNQPdja99HMb4qhCY1uFS8X0OQOVGeuhdHy8ln7eyr-6MnkCcy64wl6S_S6ep9j7aJIIopZ9wxk7Iqm-gFjmBtg6KJVkBD0IA6BnS-XlIVpbqL5LYi62elCrbDgiaD6Oe8uluucbYeL1i9kgr4c1b_NBSNe6zFwj7vrju4Zdbax-GPHmiuirf2h86eKdRl7A5h8PXGrCDNIYMID-J7_KuHKqaM-I7W5yI00QDpG9x5q5xOQMgCy1bbu3St1paqt9KHrvNS_SCx-QJgBTOIWW6T0DHVlvV_9YF5UZpN7aV5a79xvN1Gdrc7spvSs82v6gta8AJHCgzNSWQw5QUR8EN_-cTPF6S-vifLa2KtRdRAV7q-CQvhMrbBCaEYY73bQcPZFd9XE7HIbHXwXYA=s200-no';


    constructor(private readonly userDataService: UserDataService,
      private readonly firebaseRoomsService:FirebaseRoomsService,
      private readonly cookie: CookiesService){
      this.InitializeLoggedUserProfilePicture();
    }

    ngOnInit(): void {}

    ChangeUserProfilePicture(userProfilePicturePath:string){
        this.userProfilePicture = userProfilePicturePath;
        this.firebaseRoomsService.UpdateUserRoomsProfilePicture(this.cookie.GetCookieData('id'),userProfilePicturePath);
        this.userProfilePictureChanged.next(this.userProfilePicture);
    }
    InitializeLoggedUserProfilePicture(){
      this.userDataService.GetLoggedUserData.subscribe((userDataResponse:UserInformation)=>{
        this.userProfilePicture = userDataResponse.ProfilePicture;
      });
    }
    get UserProfilePicture():string{
      return this.userProfilePicture;
    }
}