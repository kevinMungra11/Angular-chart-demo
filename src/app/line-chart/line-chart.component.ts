import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css'],
})
export class LineChartComponent implements OnInit {
  title = 'ng2-charts-demo';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        data: [13, 80, 52, 3, 68, 90, 21, 44, 77, 6],
        label: 'Created',
        fill: false,
        tension: 0.1,
        backgroundColor: 'rgba(109, 113, 249, 1)',
        borderColor: 'rgba(109, 113, 249, 1)',
        pointRadius: 0,
      },
      {
        data: [37, 89, 12, 54, 61, 29, 9, 73, 18, 46],
        label: 'Completed',
        fill: false,
        tension: 0.1,
        backgroundColor: 'rgba(46, 204, 113, 1)',
        borderColor: 'rgba(46, 204, 113, 1)',
        pointRadius: 0,
      },
    ],
  };
  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    // tick propery inside scale study that for dynamic lables

    // elements: {
    //   point: {
    //     radius: 1,
    //     borderWidth: 8,
    //   },
    // },
    elements: {
      // point:{}
      line: {
        borderWidth: 2,
      },
    },
  };
  public lineChartLegend = true;

  constructor() {}

  ngOnInit() {}
}
