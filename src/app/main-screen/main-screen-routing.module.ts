import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './main-screen.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { UserEditPannelComponent } from './user-settings/user-edit-pannel/user-edit-pannel.component';


const routes: Routes = [
  { path: '', component: MainScreenComponent, children:[
    {path:'welcome', component: DashboardContainerComponent},
    {path:'editProfile', component: UserEditPannelComponent}

  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainScreenRoutingModule { }
