import { Component, OnInit } from '@angular/core';
import{FormControl, FormGroup, ReactiveFormsModule,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  LoginForm=new FormGroup(
    {
      firstName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]+')]),
      LastName:new FormControl('',[Validators.required,Validators.pattern('[a-zA-z ]+')]),
      Age:new FormControl('',[Validators.required,Validators.pattern('[0-9]+')]),
      Qualification:new FormControl('',Validators.required),
      ContactNumber:new FormControl('',Validators.required),
      gender:new FormControl('',Validators.required),
      checkbox:new FormControl('',Validators.required),

    }
  )
  constructor(private prosper:ProductServiceService,private router:Router) { }

  ngOnInit(): void {
    
    
  }
  // AddProd(form:any)
  // {
  //   console.log(this.LoginForm.value);
  //   this.prosper.AddProducts(this.LoginForm.value).subscribe(res=>{
  //     if(res)
  //     {
  //       Swal.fire("Product Added");
  //       this.router.navigate(['/product']);
  //     }
  //   })
  // }
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
        Swal.fire("Product Added");
        this.router.navigate(['/product']);
      }
    })
  }
  
}
