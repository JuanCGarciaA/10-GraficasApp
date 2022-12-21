import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  public barChartOptions: ChartOptions ={
    responsive: false,
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() public barChartData: ChartData<'bar'> = {
    labels: [], //[ '2020', '2021', '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      //{ data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      //{ data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };

  constructor() { }

  ngOnInit(): void {
    if (this.horizontal){
      this.barChartType = 'scatter';
    }
  }

}
