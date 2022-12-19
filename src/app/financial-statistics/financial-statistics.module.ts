import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './tab1/pie-chart/pie-chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FinancialStatisticsComponent } from './financial-statistics/financial-statistics.component';
import { SpendingCatTableComponent } from './tab1/spending-cat-table/spending-cat-table.component' 
import { SpendingCardsComponent } from './tab1/spending-cards/spending-cards.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SpendingFormComponent } from './tab2/spending-form/spending-form.component';
import { SpendingGraphComponent } from './tab2/spending-graph/spending-graph.component';
import { SpendingsRecordTableComponent } from './tab2/spendings-record-table/spendings-record-table.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './tab2/spendings-record-table/search.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    PieChartComponent,
    FinancialStatisticsComponent,
    SpendingCatTableComponent,
    SpendingCardsComponent,
    SpendingFormComponent,
    SpendingGraphComponent,
    SpendingsRecordTableComponent,
    SearchPipe

  ],
  imports: [
    CommonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatTableModule,
    NgxChartsModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgbDatepickerModule

  ]
})
export class FinancialStatisticsModule { }
