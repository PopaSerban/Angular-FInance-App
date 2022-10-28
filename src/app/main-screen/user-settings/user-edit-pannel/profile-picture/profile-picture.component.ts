import { Component, OnInit } from '@angular/core';
import { getDownloadURL } from 'firebase/storage';
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
    private userSettingsService: UserSettingsService) { }

  
  ngOnInit(): void {
    this.InitializeUserProfilePicture();
  }

  OnFileSelected(eventFileObject: Event){
    this.loading= true
    const element = eventFileObject.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;

    if (fileList) {
      console.log("FileUpload -> files", fileList);

       let uploadAvatarTask = this.firebaseUploadService.UploadFileToFireBase(fileList[0])
       uploadAvatarTask.on('state_changed',(snapshot)=>{
         const progress = (snapshot.bytesTransferred/ snapshot.totalBytes)*100;
         console.log(`Upload is ${progress}% done.`);
         this.loadingPercentage = progress
         switch(snapshot.state){
           case 'paused':
             console.log('Upload is paused.');
             break;
           case 'running':
             console.log('Upload is running');
             break;
         }
       },(error)=>{

       },()=>{getDownloadURL(uploadAvatarTask.snapshot.ref).then((downloadUrl)=>{
         console.log(`File available at ${downloadUrl}`);
         this.userDataService.GetLoggedUserData.subscribe((userData:UserInformation)=>{
           userData.ProfilePicture = downloadUrl;
           this.firebaseDatabaseService.UpdateUserData(userData.Id, userData).subscribe(
             response=>{

             },error=>{
               console.log(error);
              });
         });
         this.userSettingsService.ChangeUserProfilePicture(downloadUrl);
         this.profilePictureUrl = downloadUrl
         this.loading = false;
       })});
      }
      
    }

  private InitializeUserProfilePicture(){
    this.userDataService.GetLoggedUserData.subscribe((userData:UserInformation)=>{
      this.profilePictureUrl = userData.ProfilePicture;
    });
  }

}
