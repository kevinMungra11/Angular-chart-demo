import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css'],
})
export class PieChartComponent implements OnInit {
  title = 'ng2-charts-demo';

  // Pie
  public pieChartOptions: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || '';
            return `${label}: ${context.raw}`;
          },
        },
      },
      datalabels: {
        anchor: 'start',
        align: 'end',
        formatter: (value: number, ctx: any) => {
          return value.toString();
        },
        font: {
          size: 14,
        },
        borderWidth: 1,
        borderRadius: 3,
      },
    },
    // plugins: {
    //   labels: {npm install chartjs-plugin-datalabels

    //     display: true,
    //     position: 'outside', // Display labels outside slices
    //     arc: 1.7, // Increase arc for more label space
    //   },
    // },
  };
  public pieChartLabels = [
    'Not set',
    'Not completed on time',
    'Completed on time',
  ];
  public pieChartDatasets: ChartConfiguration<'pie'>['data'] = {
    labels: ['Not set', 'Not completed on time', 'Completed on time'],
    datasets: [
      {
        data: [30, 60, 10],
        backgroundColor: [
          'rgba(18, 137, 167, 1)',
          'rgba(237, 76, 103, 1)',
          'rgba(163, 203, 56, 1)',
        ],
        borderColor: [
          'rgba(18, 137, 167, 1)',
          'rgba(237, 76, 103, 1)',
          'rgba(163, 203, 56, 1)',
        ],
      },
    ],
  };
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors: Array<any> = [
    {
      backgroundColor: [
        'rgba(18, 137, 167, 1)',
        'rgba(237, 76, 103, 1)',
        'rgba(163, 203, 56, 1)',
      ],
      borderColor: [
        'rgba(18, 137, 167, 1)',
        'rgba(237, 76, 103, 1)',
        'rgba(163, 203, 56, 1)',
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
