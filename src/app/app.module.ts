import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserEditPannelComponent } from './main-screen/user-settings/user-edit-pannel/user-edit-pannel.component';
import { ProfilePictureComponent } from './main-screen/user-settings/user-edit-pannel/profile-picture/profile-picture.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { UserProfileDataComponent } from './main-screen/user-settings/user-edit-pannel/user-profile-data/user-profile-data.component';
import { PasswordStrengthComponent } from './main-screen/password-strength/password-strength.component';
import { LoginModule } from './login/login.module';
import { MainScreenModule } from './main-screen/main-screen.module';



@NgModule({
    declarations: [
        AppComponent,
        DialogBoxComponent,

    ],
    imports: [
        LoginModule,
        MainScreenModule,
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
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideDatabase(() => getDatabase()),
        provideFirestore(() => getFirestore()),
        provideStorage(() => getStorage()),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
