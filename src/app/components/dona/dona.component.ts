import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import {  } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [],
})
export class DonaComponent implements OnInit {
 
  @Input() title: string = 'Sin titulo';

  @Input('labels') doughnutChartLabels: String[] = [
    'Label1',
    'Label2',
    'Label2',
  ];
  @Input('data') Data = [ 350, 450, 100 ]; 

  doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: []
  };

  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit() {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [ 
        {data : this.Data}
      ]
    };
  }
}
