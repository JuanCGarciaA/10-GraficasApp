import { Component, OnInit } from '@angular/core';
import { GraficasService } from '../../services/graficas.service';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
  
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLabels: string[] = []; //[ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales','Others'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { 
        data: [], //[ 350, 450, 100 ],
        backgroundColor:
        [
          '#0075ED',
          '#00BAF7',
          '#00E0DB',
          '#00F7AD',
          '#00ED63',
        ] 
      },
      
    ]
  };

  constructor( private graficasService: GraficasService) { }

  ngOnInit(): void {

    this.graficasService.getUsuariosRedesSociales()
      .subscribe( data => {
        //const labels = Object.keys( data );
        //const values  = Object.values( data );
        this.doughnutChartData = {
          labels: Object.keys( data ),
          datasets: [
            { data:Object.values( data )}
          ]
        }
      });
  }

}
