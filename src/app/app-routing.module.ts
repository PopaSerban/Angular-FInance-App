import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'*', loadChildren:()=> import('./login/login.module').then(m=>m.LoginModule)},
  {path:'dashboard', loadChildren:()=> import('./main-screen/main-screen.module').then(m=>m.MainScreenModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
