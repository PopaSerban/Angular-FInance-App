import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainScreenRoutingModule } from './main-screen-routing.module';
import { MainScreenComponent } from './main-screen.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserEditPannelComponent } from './user-settings/user-edit-pannel/user-edit-pannel.component';
import { ProfilePictureComponent } from './user-settings/user-edit-pannel/profile-picture/profile-picture.component';
import { UserProfileDataComponent } from './user-settings/user-edit-pannel/user-profile-data/user-profile-data.component';
import { PasswordStrengthComponent } from './password-strength/password-strength.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { BudgetRoomComponent } from './budget-room/budget-room.component';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import { MatCardModule} from '@angular/material/card'

@NgModule({
  declarations: [
    MainScreenComponent,
    UserEditPannelComponent,
    ProfilePictureComponent,
    UserProfileDataComponent,
    PasswordStrengthComponent,
    DashboardContainerComponent,
    BudgetRoomComponent
  ],
  imports: [
    CommonModule,
    MainScreenRoutingModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonModule,
    InfiniteScrollModule,
  ],
})
export class MainScreenModule { }
