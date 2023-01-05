import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.scss']
})
export class PushNotificationComponent implements OnInit {

  title: string = 'Push Notification';
  message: string = 'This is a push notification';
  isVisible: boolean = false;

  ngOnInit() {
    this.showNotification();
  }

  showNotification() {
    this.isVisible = true;
    setTimeout(() => {
      this.isVisible = false;
    }, 3000);
  }

}
