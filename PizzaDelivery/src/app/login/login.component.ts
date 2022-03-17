import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm=new FormGroup({
    username:new FormControl(''),
    Password:new FormControl(''),
  })

  constructor(private router:Router,private http:HttpClient ) { }

  ngOnInit(): void {
  }
  PerformLogin()
  {
this.http.get<any>("http://localhost:3000/signup").subscribe(res=>
{

  const user=res.find((a:any)=>
  {
    return a.username === this.myForm.value.username && a.Password === this.myForm.value.Password
  })
  
  
  if(user)
  {
    alert("Login Successfully")
    this.router.navigate(['/Home'])
  }
  else{
    alert("Invalid User")
  }
})
  }
}
