import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/Services/userData.service';
import { UserInformation } from 'src/app/shared/models/userInformation.model';

import countryCodes from './Json/CountryCodes.json';

interface CountryCodes{
  name: string,
  dial_code: string,
  code:string
}

@Component({
  selector: 'app-user-profile-data',
  templateUrl: './user-profile-data.component.html',
  styleUrls: ['./user-profile-data.component.scss']
})
export class UserProfileDataComponent implements OnInit, OnDestroy {
  countryCodesList: CountryCodes[]=countryCodes;
  shouldShowStateCode: Boolean = false;
  changingPassword: Boolean = false;
  passwordIsValid: Boolean = false;
  showStateCode: string = '';
  userDataProfileForm:any
  userDataServiceSubscription: Subscription = new Subscription();
  userData: UserInformation = new UserInformation();

  constructor(
    private readonly userDataService: UserDataService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.InitialiseUserDataSync();
    this.InitForm();
    this.SubscribeUserDataService();
    this.FillFormWithUserData(this.userData);
  }

  private InitForm(){
    console.log(this.userData.Email.length !=0)
    this.userDataProfileForm = this.formBuilder.group({
      Firstname:[''],
      Surname:[''],
      Email: [{value:'', disabled: (this.userData.Email.length !=0)}, Validators.email],
      Password:[''],
      Adress:['', Validators.minLength(5)],
      City: ['',Validators.minLength(4)],
      State:[''],
      Zip:[''],
      CountryCode:[''],
      Number:[''],
    });
  };
  private FillFormWithUserData(userData: UserInformation){
    this.userDataProfileForm.controls['Firstname'].setValue(this.userData.FirstName);
    this.userDataProfileForm.controls['Surname'].setValue(this.userData.Surname);
    this.userDataProfileForm.controls['Email'].setValue(this.userData.Email);
    this.userDataProfileForm.controls['Adress'].setValue(this.userData.Adress);
    this.userDataProfileForm.controls['City'].setValue(this.userData.City);
    this.userDataProfileForm.controls['Zip'].setValue(this.userData.Zipcode);
    this.userDataProfileForm.controls['Number'].setValue(this.userData.Phone);
  }
  OnSubmit(){
    this.userDataService.LoggedUserDataPartial({
      firstname: this.userDataProfileForm.controls['Firstname'].value,
      surname: this.userDataProfileForm.controls['Surname'].value,
      adress: this.userDataProfileForm.controls['Adress'].value,
      city: this.userDataProfileForm.controls['City'].value,
      zipcode: this.userDataProfileForm.controls['Zip'].value,
      phone: this.userDataProfileForm.controls['Number'].value
    });
  };
  private InitialiseUserDataSync(){
    this.userDataService.GetLoggedUserData.subscribe(userData=>{
      this.userData = userData;
    });
  }
  private SubscribeUserDataService(){
    this.userDataServiceSubscription = this.userDataService.userDataChanged.subscribe(
      (userDataChanged:UserInformation)=>{
        this.userData = userDataChanged;
    },error=>{
      console.log(error);
    });
  }

  ChangePhoneCode(e:any){  
    this.shouldShowStateCode = true;
    this.showStateCode = e.target.value
    this.CountryCode?.setValue(e.target.value,
      {onlySelf: true})
  };

  get CountryCode(){
    return this.userDataProfileForm.get('typeCountryCode');
  }

  OnCountryCodeClick(){
    this.shouldShowStateCode = false;
  }
  OnChangePassword(){
    this.changingPassword=!this.changingPassword;
  }

  passwordValid(event:any) {
    this.passwordIsValid = event;
  }

  ngOnDestroy(): void {
    this.userDataServiceSubscription.unsubscribe();
  }

}
