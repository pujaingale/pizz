import { Component, OnInit,Input } from '@angular/core';

import { Employee } from '../Employee';

@Component({
  selector: 'app-bar-chart-item',
  templateUrl: './bar-chart-item.component.html',
  styleUrls: ['./bar-chart-item.component.css']
})
export class BarChartItemComponent implements OnInit {
@Input() arr:Employee;
  constructor() { }
 
  ngOnInit(): void {
  }
  OnClick()
  {
    console.log("Deleted");
    
  }
}
