import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserSettingsService } from '../user-settings/user-settings.service';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit, OnDestroy {
  profilePictureUrl: String = 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp';
  private userProfilePictureSubject: Subscription = new Subscription();;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private userSettingsService: UserSettingsService) {}

  ngOnInit(): void {
    this.userProfilePictureSubject = this.userSettingsService.userProfilePictureChanged.subscribe((profilePicture)=>{
      this.profilePictureUrl = profilePicture;
    });
  }
  ngOnDestroy(): void {
    this.userProfilePictureSubject.unsubscribe();
  }

}
