import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-graficar-total',
  templateUrl: './graficar-total.component.html',
  styleUrls: ['./graficar-total.component.css']
})
export class GraficarTotalComponent implements OnInit {


  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartColors: Color[] = [
    { backgroundColor: '#007BFF' },
  ]
  public barChartLabels: Label[] = ['Recursamiento y selección de personal', 'Formación y capacitación', 'Permanencia y Ascenso', 'Corresponsabilidad en la vida labortal familiar y personal', 'Clima laboral libre de violencia' ,'Acoso y hostigamiento','Accesibilidad 1', 'Accesibilidad 2', 'Accesibilidad 3'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[];

  constructor() { }

  ngOnInit(): void {
    this.barChartData = [
      { data: [28, 48, 40, 19, 86,34,54,76,23], label: 'Total ' }
    ];
  }

}
