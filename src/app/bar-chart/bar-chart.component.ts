import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent implements OnInit {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      {
        data: [11, 12, 12],
        label: 'To do',
        backgroundColor: 'rgba(124, 124, 141, 1)',
        barThickness: 40,
        barPercentage: 1.5,
      },
      {
        data: [66, 5, 31, 96, 26, 83, 49, 74, 100, 8],
        label: 'In progress',
        backgroundColor: 'rgba(243, 156, 18, 1)',
        barThickness: 40,
        barPercentage: 1.5,
      },
      {
        data: [37, 89, 12, 54, 61, 29, 9, 73, 18, 46],
        label: 'Pause',
        backgroundColor: 'rgba(109, 113, 249, 1)',
        barThickness: 40,
        barPercentage: 1.5,
      },
      {
        data: [72, 38, 14, 9, 51, 26, 63, 89, 100, 42],
        label: 'Completed',
        backgroundColor: 'rgba(46, 204, 113, 1)',
        barThickness: 40,
        barPercentage: 1.5,
      },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        ticks: {
          minRotation: 0,
        },
      },
      y: {
        stacked: true,
        ticks: {
          minRotation: 0,
        },
      },
    },
  };

  constructor() {}

  ngOnInit(): void {}
}
