import { AfterViewChecked, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CookiesService } from 'src/app/Services/Cookies/cookies.service';
import { IMessage } from '../Models/IMessage';
import { FirebaseChatService } from '../Services/firebase-chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewChecked {
  @ViewChild('messagesContainer', { static: true }) private messagesContainer: ElementRef<HTMLInputElement> = {} as ElementRef;
  newMessage: IMessage;
  myId: string;
  messages: IMessage[]=[];
  messageObservable: Subscription;

 constructor(private readonly firebaseChatService: FirebaseChatService, private readonly cookie: CookiesService) {
   this.messageObservable = this.firebaseChatService.ChatMessages.subscribe(messagesList=>{
     this.messages = messagesList;
   });
   this.myId = this.cookie.GetCookieData('id');
   this.newMessage = {
    timestamp: '',
    userID: this.myId,
    userName:this.cookie.GetCookieData('surname'),
    userProfilePicture: this.cookie.GetCookieData('profilePicture'),
    message: ''
   }
 }

 ngOnInit() { }

 ngAfterViewChecked() {
  this.ScrollDown();
}

 sendMessage() {
  this.ScrollDown();
   if(this.newMessage.message !=''){
     let date = new Date();
     this.newMessage.timestamp = date.toLocaleString('de-DE', {timeZone: 'Europe/Bucharest',})
     this.firebaseChatService.AddMessage(this.newMessage)
     this.newMessage.message = '';
     this.newMessage.timestamp ='';
   }
 }
 ngOnDestroy() {
     this.messageObservable.unsubscribe();
 }

 ScrollDown(){
  this.messagesContainer.nativeElement.scrollTo(0, this.messagesContainer.nativeElement.scrollHeight);
 } 

}
