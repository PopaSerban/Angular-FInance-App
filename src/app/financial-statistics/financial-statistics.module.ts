import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FinancialStatisticsComponent } from './financial-statistics/financial-statistics.component';
import { SpendingCatTableComponent } from './spending-cat-table/spending-cat-table.component' 
import { SpendingCardsComponent } from './spending-cards/spending-cards.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
  declarations: [
    PieChartComponent,
    FinancialStatisticsComponent,
    SpendingCatTableComponent,
    SpendingCardsComponent

  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgxChartsModule,
    MatTabsModule,
    MatToolbarModule
    
  ]
})
export class FinancialStatisticsModule { }
