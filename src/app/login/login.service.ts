import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import { catchError, throwError } from "rxjs";

export interface AuthenticationResponseData{
    idToken: string,
    email: string,
    refreshToken: string,
    expiresIn: string,
    localID: string,
    registered?: boolean
}

@Injectable({providedIn: 'root'})
export class AuthenticationService{
    constructor(private httpRequest: HttpClient,private router: Router){}


    SignUpUser(userSetEmail: string, userSetPassword: string){
        return this.httpRequest.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.firebaseApiKey,{
            email:userSetEmail,
            password: userSetPassword,
            returnSecureToken: true
        }).pipe(catchError(this.HandleError));
    }

    LoginUser(userEmail:string, userPassword: string){
        return this.httpRequest.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.firebaseApiKey,{
            email: userEmail,
            password: userPassword,
            returnSecureToken: true
        }).pipe(catchError(this.HandleError));
    }

    private HandleError( errorResponse :HttpErrorResponse){
        console.log(errorResponse.error.error.message);
        
        let errorMessage = new Error('An unexpected error occurred!')
        console.log(errorResponse.error+ "|"+ errorResponse.error.error.message)
            if(!errorResponse.error || !errorResponse.error.error){ return throwError(()=>errorMessage)}
            switch(errorResponse.error.error.message){
                case'TOO_MANY_ATTEMPTS_TRY_LATER : Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.':
                    errorMessage = new Error('Access to this account has been temporarily disabled due to many failed login attempts.'+
                    'You can immediately restore it by resetting your password or you can try again later.')
                    break;
                case'USER_DISABLED':
                    errorMessage = new Error('The account has been disabled by an administrator.');
                    break;
                case'EMAIL_NOT_FOUND':
                    errorMessage = new Error('There is no user record corresponding to this email.');
                    break;
                case'EMAIL_EXISTS':
                    errorMessage = new Error('This email exists already.');
                    break;
                case'INVALID_PASSWORD':
                    errorMessage = new Error('The password is invalid.');
                    break;

            }
            return throwError(()=>errorMessage);
    }

}