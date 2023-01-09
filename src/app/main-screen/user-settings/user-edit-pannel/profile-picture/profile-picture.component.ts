import { Component, OnInit } from '@angular/core';
import { FirebaseRoomsService } from 'src/app/friends-rooms/Services/firebase-rooms.service';
import { FireBaseDatabaseService } from 'src/app/Services/firebase-database.service';
import { FireBaseUploadService } from 'src/app/Services/firebase-upload.service';
import { UserDataService } from 'src/app/Services/userData.service';
import { UserInformation } from 'src/app/shared/models/userInformation.model';
import { UserSettingsService } from '../../user-settings.service';



@Component({
  selector: 'app-profile-picture',
  templateUrl: './profile-picture.component.html',
  styleUrls: ['./profile-picture.component.scss']
})
export class ProfilePictureComponent implements OnInit {
  profilePictureUrl:String = '';
  fileName: String = '';
  loading: boolean = false;
  loadingPercentage: number = 0;

  constructor(
    private readonly firebaseDatabaseService: FireBaseDatabaseService,
    private readonly userDataService: UserDataService,
    private firebaseUploadService: FireBaseUploadService,
    private userSettingsService: UserSettingsService,) { }

  
  ngOnInit(): void {
    this.InitializeUserProfilePicture();
  }

  async OnFileSelected(eventFileObject: Event){
    this.loading= true
    const element = eventFileObject.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;

    if (fileList) {

      const uploadTask = this.firebaseUploadService.UploadFileToFireBase(fileList[0]);

      uploadTask.then(snapshot => {
        // Get a reference to the uploaded file
        const fileRef = snapshot.ref;
      
        // Get the download URL of the file
        fileRef.getDownloadURL().then(downloadURL => {
          console.log(`File download URL: ${downloadURL}`);
          // Update the user's profile picture URL in the database
          this.userDataService.GetLoggedUserData.subscribe((userData: UserInformation) => {
                userData.ProfilePicture = downloadURL;
                this.firebaseDatabaseService.UpdateUserData(userData.Id, userData).subscribe();
              });
              // Change the user's profile picture in the user settings service
              this.userSettingsService.ChangeUserProfilePicture(downloadURL);     
              // Update the local profile picture URL
              this.profilePictureUrl = downloadURL;
          this.loading = false
        });
      
        // Calculate the percentage of the upload
        const percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        console.log(`Upload percentage: ${percentage}`);
        this.loadingPercentage = percentage
      });
      }
    }

  private InitializeUserProfilePicture(){
    this.userDataService.GetLoggedUserData.subscribe((userData:UserInformation)=>{
      this.profilePictureUrl = userData.ProfilePicture;
    });
  }

}
