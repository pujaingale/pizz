import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,AbstractControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductServiceService } from '../product-service.service';
import {ConfirmPasswordValidate} from '../../../ConfirmedPassword.Validator';
function ageRange(control:AbstractControl)
{
if(control.value!==undefined && (isNaN(control.value) || control.value<12 || control.value>50))
{
  return {'ageError':true}
}
return null;
}

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  LoginForm:FormGroup=new FormGroup({})
   
  constructor(private prosper:ProductServiceService,private router:Router,private fb:FormBuilder) { 
    this.LoginForm=this.fb.group({
      firstName:['',[Validators.required,Validators.pattern('[a-zA-Z ]+')]],
      LastName:['',[Validators.required,Validators.pattern('[a-zA-z ]+')]],
      Age:['',[Validators.required,Validators.pattern('[0-9]+'),ageRange]],
      Qualification:['',Validators.required],
      ContactNumber:['',Validators.required],
      gender:['',Validators.required],
      checkbox:['',[Validators.required]],
      Password:['',[Validators.required]],
      ConfirmPassword:['',Validators.required],
    },{
      Validator:ConfirmPasswordValidate('Password','ConfirmPassword')
    })
  }
  

  ngOnInit(): void {
  }
  get f()
  {
    return this.LoginForm.controls;
  }
  GetDetails()
  {
    console.warn(this.LoginForm.value);
    console.log(this.LoginForm.value);
    this.prosper.AddProducts(this.LoginForm.value).subscribe(res=>{
      if(res)
      {
        Swal.fire("Contact Added");
        this.router.navigate(['/contact']);
      }
    })
  }

}
