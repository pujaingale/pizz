import { Component, OnInit } from '@angular/core';
import { Employee } from "../Employee";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  employee:Employee[];
  constructor() { 
    this.employee=[{
      name:"Puja",
      age:"25"
    },
    {
      name:"Umesh",
      age:"30"
    },
    {
      name:"Ashok",
      age:"31"
    },
  ]
  }
  
  ngOnInit(): void {
  }
 
}
