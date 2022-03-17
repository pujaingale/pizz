import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
count=0;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('mycart')!=undefined)
    {
      let arr=JSON.parse(localStorage.getItem('mycart') || '{}');
     this.count=arr.length;
    }
  }
  SignUpUser()
  {
this.router.navigate(['/SignUp']);
  }
  GoHome(){
    this.router.navigate(['/Home']);
  }

}
