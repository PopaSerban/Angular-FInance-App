import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FireBaseUploadService {
  constructor(private storage: AngularFireStorage) {}

  public UploadFileToFireBase(file: File): AngularFireUploadTask{
    const filePath = `${file.name}`;
    const task = this.storage.upload(filePath, file);
    return task;
  }

  public fetchUserProfilePicture(): Observable<string> {
    const storageRef = this.storage.storage.ref();
    const fileRef = storageRef.child('user-profile-picture.jpg');
    return from(fileRef.getDownloadURL());
  }
}
