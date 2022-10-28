import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationService } from './Services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { Router } from '@angular/router';
import { FireBaseDatabaseService } from '../Services/firebase-database.service';
import { UserDataService } from '../Services/userData.service';
import { UserInformation } from '../shared/models/userInformation.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','./button-animation.component.scss']
})
export class LoginComponent implements OnInit {
  isSignUp: Boolean = false;
  passwordMatch: Boolean = true;
  AuthenticationForm: UntypedFormGroup = new UntypedFormGroup({});

  constructor(
    private readonly authenticationService: AuthenticationService,
    private readonly firebaseDatabase: FireBaseDatabaseService,
    private readonly userDataService: UserDataService,
    private readonly router: Router,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.InitForm();
  }


  private InitForm(){
    if(!this.isSignUp){
      this.AuthenticationForm = new UntypedFormGroup({
        'typeEmailX': new UntypedFormControl(null, [Validators.required, Validators.email]),
        'typePasswordX': new UntypedFormControl(null, [Validators.required, Validators.minLength(6)]),
      });
    }else{
      this.AuthenticationForm = new UntypedFormGroup({
        'typeEmailX': new UntypedFormControl(null, [Validators.required, Validators.email]),
        'typePasswordX': new UntypedFormControl(null, [Validators.required, Validators.minLength(6)]),
        'typePasswordY': new UntypedFormControl(null, [Validators.required, Validators.minLength(6)])
      })
    }
    
  }
  public OnSubmit(){
    this.passwordMatch= true;
    if(this.AuthenticationForm.invalid){ return;};

      const email = this.AuthenticationForm.value.typeEmailX;
      const password = this.AuthenticationForm.value.typePasswordX;
      let authenticationObservable : Observable<any>;

      if(this.isSignUp){
        const retypePassword = this.AuthenticationForm.value.typePasswordY;
        if(password != retypePassword){
          this.passwordMatch != this.passwordMatch;
          const errorMessage = 'Passwords do not match, please check both passwords.'
          this.matDialog.open(DialogBoxComponent,{
            data:errorMessage
          });
          return;
        }
        authenticationObservable = this.authenticationService.SignUpUser(email,password);
      }else{
        authenticationObservable = this.authenticationService.LoginUser(email,password);
      }
      authenticationObservable.subscribe(responseData=>{
        console.log(responseData);
        if(this.isSignUp){
          this.userDataService.LoggedUserDataPartial({Id: this.firebaseDatabase.GetUserID(email), Email:email});

          this.userDataService.GetLoggedUserData.subscribe(userData=>{
            this.firebaseDatabase.RegisterUser(userData);
          })
          //this.firebaseDatabase.RegisterUser(this.userDataService.GetLoggedUserData);
        }else{
          const id = this.firebaseDatabase.GetUserID(email)
          this.firebaseDatabase.GetUserData(id).subscribe((response: UserInformation)=>{
            this.userDataService.SetLoggedUserData(response);
          });
        }
        this.router.navigate(['/welcome']);
      },error=>{
        this.matDialog.open(DialogBoxComponent,{
          data:error.message
        });
      });
      
  }
  
  public SwitchSignState(){
    this.isSignUp = !this.isSignUp;
    this.AuthenticationForm.reset();
    this.InitForm();
  }
}
