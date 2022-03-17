import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css']
})
export class OrderNowComponent implements OnInit {
p:number=1;
  constructor(private route:Router) {}

  ngOnInit(): void {
  }
  menuItems:any=[
  {"id":1,"Title":"Don Bacon","Price":"$24.1","image":"../../assets/paneer.jpg"  },
  {"id":2,"Title":"Carne","Price":"$26.3","image":"../../assets/pepperoni-pizza.jpg"  },
  {"id":3,"Title":"Cipollo","Price":"$10","image":"../../assets/pepperoni-pizza.jpg"  }

]
AddToCart(id:any)
{
 if(localStorage.getItem('mycart')!=undefined)
 {
let jsonData=localStorage.getItem('mycart');
let arr=JSON.parse(jsonData ||'{}');
if(arr.includes(id))
{
alert("Product Already Added")
}
else{
arr.push(id);
localStorage.setItem('mycart',JSON.stringify(arr))
alert("product Added")
}
 }
 else
 {
   let arr=[];
   arr.push(id);
   localStorage.setItem('mycart',JSON.stringify(arr))
   alert("product Added")
 }
this.route.navigate(['/OrderNow'])
}

}
