import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl}from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  MyForm=new FormGroup({
    username:new FormControl(''),
    fullname:new FormControl(''),
    address:new FormControl(''),
    contactnumber:new FormControl(''),
    Password:new FormControl(''),
  })
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
  }
  RegisterUser()
  {
this.http.post<any>("http://localhost:3000/signup",this.MyForm.value).subscribe(res=>
  {console.log(res)});
  alert("Regiter Successfully")
  this.router.navigate(['/login']);
  

  }
  GoToLogin()
  {
    //this.router.navigate(['/login'])
  }
}
