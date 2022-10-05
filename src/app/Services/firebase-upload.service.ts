import { Injectable } from '@angular/core';
import { FirebaseApp, initializeApp } from "firebase/app";
import { FirebaseStorage, getStorage, listAll, ref, uploadBytesResumable, UploadTask } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class FireBaseUploadService {
    firebaseConfig = {storageBucket: 'gs://budget-app-77595.appspot.com'};
    firebaseApp;
    firebaseStorage;
    constructor(){
        this.firebaseApp = this.InitializeFireBase();
        this.firebaseStorage  = this.InitializeFirebaseCloudStorage(this.firebaseApp);
    };


    public InitializeFireBase(): FirebaseApp{
        return initializeApp(this.firebaseConfig);
    }
    public InitializeFirebaseCloudStorage(firebaseApp:FirebaseApp):FirebaseStorage{
        return getStorage(firebaseApp)
    }

    public UploadFileToFireBase(file: File): UploadTask{
        const storageRef = ref(this.firebaseStorage, file.name);
        return  uploadBytesResumable(storageRef, file);
    }
    public FetchUserProfilePicture(){
        const storageRef = ref(this.firebaseStorage);
        console.log( storageRef)
        listAll(storageRef)
            .then((res) => {
                storageRef.bucket[0]
                res.prefixes.forEach((folderRef) => {
                    // All the prefixes under listRef.
                    // You may call listAll() recursively on them.
                    console.log(folderRef)
                  });
                  res.items.forEach((itemRef) => {
                    console.log(itemRef)
                    console.log( ref(itemRef));
                  });
        }).catch((error) => {
            // Uh-oh, an error occurred!
             });
    }
}