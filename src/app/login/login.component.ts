import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthenticationResponseData, AuthenticationService } from './login.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss','./button-animation.component.scss']
})
export class LoginComponent implements OnInit {
  isSignUp: Boolean = false;
  passwordMatch: Boolean = true;
  AuthenticationForm: UntypedFormGroup = new UntypedFormGroup({});

  constructor(private authenticationService: AuthenticationService, private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.InitForm();
  }


  private InitForm(){
    if(!this.isSignUp){
      this.AuthenticationForm = new UntypedFormGroup({
        'typeEmailX': new UntypedFormControl(null, [Validators.required, Validators.email]),
        'typePasswordX': new UntypedFormControl(null, [Validators.required, Validators.minLength(6)]),
      })
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
