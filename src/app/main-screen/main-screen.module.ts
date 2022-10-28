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


@NgModule({
  declarations: [
    MainScreenComponent,
    UserEditPannelComponent,
    ProfilePictureComponent,
    UserProfileDataComponent,
    PasswordStrengthComponent,
    DashboardContainerComponent
  ],
  imports: [
    CommonModule,
    MainScreenRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonModule

  ],
})
export class MainScreenModule { }
