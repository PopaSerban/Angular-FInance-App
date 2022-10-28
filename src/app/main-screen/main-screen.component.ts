import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { UserSettingsService } from './user-settings/user-settings.service';
import { UserDataService } from '../Services/userData.service';
import { UserInformation } from '../shared/models/userInformation.model';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit, OnDestroy {
  // profilePictureUrl: String = 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp';
  private userProfilePictureSubject: Subscription = new Subscription();
  private userDataServiceSubscription: Subscription = new Subscription();
  profilePictureUrl: String = ''

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private readonly userDataService: UserDataService,
    private breakpointObserver: BreakpointObserver,
    private userSettingsService: UserSettingsService) {}

  ngOnInit(): void {
    this.userDataServiceSubscription = this.userDataService.userDataChanged.subscribe((userDataResponse:UserInformation)=>{
      this.profilePictureUrl = userDataResponse.ProfilePicture;
    })
    this.userProfilePictureSubject = this.userSettingsService.userProfilePictureChanged.subscribe((profilePicture)=>{
      this.profilePictureUrl = profilePicture;
    });
  }
  ngOnDestroy(): void {
    this.userProfilePictureSubject.unsubscribe();
    this.userDataServiceSubscription.unsubscribe();
  }

}
