import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgChartsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
