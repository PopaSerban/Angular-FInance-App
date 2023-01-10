import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { IMessage } from '../Models/IMessage';

@Injectable({
  providedIn: 'root'
})
export class FirebaseChatService {
  private MessagesCollection: AngularFirestoreCollection<IMessage>;
  ChatMessages : Observable<IMessage[]>

  constructor(private firestoreService: AngularFirestore) {
    this.MessagesCollection = this.firestoreService.collection<IMessage>('Messages');
    this.ChatMessages = this.MessagesCollection.valueChanges();

   }

   InitialiseMessages(roomID:string){
    this.MessagesCollection = this.firestoreService.collection('Rooms').doc(roomID).collection<IMessage>('Messages', ref => ref.orderBy('timestamp'));
    this.ChatMessages = this.MessagesCollection.valueChanges();
   }

   AddMessage(message: IMessage){
     this.MessagesCollection.add(message);
   }

   async DeleteMessages(roomID: string){
    const batch = this.firestoreService.firestore.batch();
     await this.firestoreService.collection('Rooms').doc(roomID).collection('Messages').get().forEach(messagesSnapshot=>{
      messagesSnapshot.docs.forEach(message=>{
        batch.delete(message.ref);
       });
     });
     batch.commit().then(()=>{
       console.log(`All messages for room ${roomID} succesfully deleted`)
     }).catch(error=>{
       console.error('Error deleting document and subcollection: ', error);
     });

   }

}
