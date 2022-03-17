import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private prosper:ProductServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  AddProduct(form:any)
  {
   // console.log(form); 
let pname=form.pname;
let price=form.price;
let quantity=form.quantity;
this.prosper.AddProducts({pname:pname,price:price,quantity:quantity}).subscribe(res=>{
  if(res){
  Swal.fire("Product Added");
  this.router.navigate(['/product']);
  }
})
console.log(pname,price,quantity);
  }
}
