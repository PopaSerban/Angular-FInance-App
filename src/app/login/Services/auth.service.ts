import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from '@angular/fire/auth';
import { LoginData } from '../interfaces/login-data.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  Login({email, password}: LoginData){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  Register({email, password}: LoginData){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  Logout(){
    return signOut(this.auth);
  }
}
