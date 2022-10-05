import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserEditPannelComponent } from './user-settings/user-edit-pannel/user-edit-pannel.component';
import { ProfilePictureComponent } from './user-settings/user-edit-pannel/profile-picture/profile-picture.component';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DialogBoxComponent,
        MainScreenComponent,
        UserEditPannelComponent,
        ProfilePictureComponent

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatProgressBarModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatDialogModule,
        FormsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
