import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainScreenComponent } from './main-screen.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { UserEditPannelComponent } from './user-settings/user-edit-pannel/user-edit-pannel.component';
import { BudgetRoomComponent } from './budget-room/budget-room.component';
import { PieChartComponent } from '../financial-statistics/pie-chart/pie-chart.component';
import { FinancialStatisticsComponent } from '../financial-statistics/financial-statistics/financial-statistics.component';


const routes: Routes = [
  { path: '', component: MainScreenComponent, children:[
    {path:'welcome', component: DashboardContainerComponent},
    {path:'editProfile', component: UserEditPannelComponent},
    {path: 'budgetRooms', component: BudgetRoomComponent},
    {path: 'budgetDashboard', component: FinancialStatisticsComponent}

  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainScreenRoutingModule { }
