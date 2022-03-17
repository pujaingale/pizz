import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {Employee} from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
//import { fileURLToPath } from 'url';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
dataSaved=false;
employeeForm:FormGroup;

allEmployees:Observable<Employee[]>;
employeeIdUpdate:null;

  constructor(private formbuilder:FormBuilder,private employeeService:EmployeeServiceService) { }
  

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
  fileAttr='Upload Profile Picture';
  ngOnInit(): void {
    this.employeeForm = this.formbuilder.group({  
      FirstName: ['', [Validators.required]],  
      LastName: ['', [Validators.required]],  
      EmailAddress: ['', [Validators.required]],  
      MobileNumber: ['', [Validators.required]],  
      PanNumber: ['', [Validators.required]],  
      PassportNumber: ['', [Validators.required]],  
      ProfileImage: ['', [Validators.required]],
    Gender: ['', [Validators.required]],
    IsActive: ['', [Validators.required]],
    DateOfBirth: ['', [Validators.required]],
    DateOfJoinee: ['', [Validators.required]],
    CreatedDate: ['', [Validators.required]],
    UpdatedDate: ['', [Validators.required]],
    IsDeleted: ['', [Validators.required]],
    DeletedDate: ['', [Validators.required]]
    });  
    this.loadAllEmployees();  
  }
  loadAllEmployees()
  {
    this.employeeService.getAllEmployee().subscribe((data:any)=>{
      try {
        alert(JSON.stringify(data));
        this.allEmployees=data;
      } catch (error) {
        
      }
     
    });;
  }
  onFormSubmit()
  {
    this.dataSaved=false;
    const employee=this.employeeForm.value;
    this.CreateEmployee(employee);
    //this.employeeForm.reset();
    
  }
  
  CreateEmployee(employee:Employee)
  {
    if(this.employeeIdUpdate==null)
    {
      this.employeeService.createEmployee(employee).subscribe(()=>{
        this.dataSaved=true;
        this.loadAllEmployees();
        this.employeeIdUpdate=null;
        this.employeeForm.reset();
      });
    }
    
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
