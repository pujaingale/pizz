import { Component, OnInit } from '@angular/core';
import { ChartOptions,ChartType } from 'chart.js';
import { ChartDataset } from 'chart.js';
//import { Label  } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  
  //public chart_Labels: Label[] = ['Nikunj Satasiya', 'Hiren Dobariya', 'Vivek Ghadiya', 'Shreya Patel', 'Pratik Pansuriya', 'Keval Patel'];
 
 


  constructor() { }

  ngOnInit(): void {
  }
  public chart_Legend = true;
  public chart_Plugins = [];
  public chart_Type: ChartType = 'bar';
  public barChartOptions:any = {
    scaleShowHorizontalLines: true,
    responsive: true
  };
  public barChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(105,159,177,0.2)',
      borderColor: 'rgba(101,150,171,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },
    { 
      backgroundColor: 'rgba(77,20,96,0.3)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    }
  ];
  public barChartData:any[] = [
    {data: [100, 110, 55, 85, 45, 71, 95,81,108,75,50], label: 'Total Questions Attempted in Skill'},
    {data: [80, 40, 55, 115, 30, 65, 50,60,65,55,40], label: 'Correct Answers'}
  ];
  public mbarChartLabels:string[] = ['JavaScript', 'Angular', 'Node.js', 'Java', 'Python', 'HTML/CSS', 'React','.Net','TypeScript','WordPress','React'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
  public randomize():void {
    let data = [
      Math.round(Math.random() * 50),
      Math.round(Math.random() * 50),
      Math.round(Math.random() * 50),
      (Math.random() * 50),
      Math.round(Math.random() * 50),
      (Math.random() * 100),
      Math.round(Math.random() * 50)];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }



}
