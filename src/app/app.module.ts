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
import { environment } from '../environments/environment';
import { LoginModule } from './login/login.module';
import { MainScreenModule } from './main-screen/main-screen.module';
import { CookieService } from 'ngx-cookie-service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PushNotificationComponent } from './Utils/push-notification/push-notification.component';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
    declarations: [
        AppComponent,
        DialogBoxComponent,
        PushNotificationComponent,

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
        AngularFireModule.initializeApp(environment.firebase),
        NgbModule,
    ],
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }

