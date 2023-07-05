import { Component, ViewChild } from "@angular/core";
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexFill,
  ChartComponent
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  legend: string[];
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {
    this.chartOptions = {
      series: [76, 24],
      chart: {
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          track: {
            background: "#e7e7e7",
          },
          dataLabels: {
            show: false,
          }
        }
      },
      legend:{
        show: false,
      },
      fill: {
        colors:["#0d6efd","#dc3545"]
      },
      grid: {
        padding: {
          top: 0,
          right: 0,
          bottom: -100,
          left: 0
        },
      },
      stroke:{
        show:false
      },
      tooltip: {
        enabled: false,
        enabledOnSeries: false,
        shared: false,
      }
    };
  }
}
