import { Component, OnInit } from '@angular/core';
import { getDownloadURL } from 'firebase/storage';
import { FireBaseUploadService } from 'src/app/Services/firebase-upload.service';
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

  constructor(private firebaseUploadService: FireBaseUploadService, private userSettingsService: UserSettingsService) { }

  
  ngOnInit(): void {
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
         this.userSettingsService.ChangeUserProfilePicture(downloadUrl);
         this.profilePictureUrl = downloadUrl
         this.loading = false;
       })});
      }
      
    }
  }
