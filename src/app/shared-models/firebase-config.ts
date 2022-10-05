import { FirebaseApp, initializeApp } from "firebase/app";
import { FirebaseStorage, getStorage, getStream } from "firebase/storage";

export class FireBaseCnfg{
    firebaseConfig = {storageBucket: 'gs://budget-app-77595.appspot.com'};

    constructor(){ this.InitializeFireBase()};


    public InitializeFireBase(): FirebaseApp{
        return initializeApp(this.firebaseConfig);
    }
    public InitializeFirebaseCloudStorage(firebaseApp:FirebaseApp):FirebaseStorage{
        return getStorage(firebaseApp)
    }
}

