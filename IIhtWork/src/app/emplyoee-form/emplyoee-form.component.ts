import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { Employee } from '../Employee';
import { FormService } from '../form.service';

@Component({
  selector: 'app-emplyoee-form',
  templateUrl: './emplyoee-form.component.html',
  styleUrls: ['./emplyoee-form.component.css']
})
export class EmplyoeeFormComponent implements OnInit {
  allEmployees: Observable<Employee[]>;  
  constructor(private formbulider: FormBuilder, private formService:FormService) { }
  employee:Employee[];
  Countries :any[]=[{"name":"India"},
  {"name":"London"},
  {"name":"America"},
  {"name":"Usa"}
  ];
  States :any[]=[{"name":"Maharashtra"},
  {"name":"Gujrat"},
  {"name":"Goa"},
  {"name":"Andrapradesh"}
  ];
  Cities :any[]=[{"name":"Nanded"},
  {"name":"Pune"},
  {"name":"Mumbai"},
  {"name":"Hingoli"}
  ];

  ngOnInit(): void {
    
  }
  loadAllEmployees() {  
    this.allEmployees = this.formService.getAllEmployee();  
  }  
  CreateEmployee(employee: Employee) {  
    
      this.formService.createEmployee(employee).subscribe(  
        () => {  
          this.loadAllEmployees();   
        }  
      );  
    } 
  @ViewChild('fileInput') fileInput:ElementRef;
  uploadFileEvt(img:any)
  {
    if(img.target.files &&img.target.files[0])
    {
      
      let reader=new FileReader();
      reader.onload=(e:any)=>{
        let image=new Image();
        image.src=e.target.result;
        image.onload=rs=>
        {
          let imgBase64Path=e.target.result;
        };
      };
      reader.readAsDataURL(img.target.files[0]);
    }
  }

}
