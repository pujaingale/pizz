import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductServiceService} from 'src/app/product-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
catName:any;
resData:any;
proData:any;
  constructor(private aroute:ActivatedRoute,private prosper:ProductServiceService) {
//     this.proData=[
//       {id: 1, pname: 'A', price: 255, quantity: 4},
// {id: 2, pname: 'B', price: 257, quantity: 6},
//  {id: 4}
//     ];
   }

  ngOnInit(): void {
    this.catName=this.aroute.snapshot.params['cname'];
    this.prosper.GetData().subscribe(res=>{
       this.resData=res;
       this.proData=this.resData;
   // console.log(res)
  },
 err=>{console.log(err)}
    )
  }
  DeleteProd(id:any)
  {
  //   if(confirm("Do u want to delete?"))
  //   {
  //   this.prosper.DeleteDataById(id).subscribe(res=>{
  //     if(res)
  //     {
  //       alert("Product Deleted");
  //       this.prosper.GetData().subscribe(res=>{
  //         this.resData=res;
  //         this.proData=this.resData;
  //     // console.log(res)
  //    },
  //   err=>{console.log(err)}
  //      )
  //     }
  //   })
  // }
Swal.fire({
  title:'Do you want to delete?',
  showDenyButton:true,
  confirmButtonText:'Delete',
  denyButtonText:'Cancel',

}).then((res) =>
{
if(res.isConfirmed)
{
  Swal.fire('Saved','','success')
  this.prosper.DeleteDataById(id).subscribe(res=>{
  console.log(res)},
  err=>{console.log(err)});
  this.prosper.GetData().subscribe(res=>{
    this.resData=res;
   this.proData=this.resData;
// console.log(res)
},
err=>{console.log(err)}
);
        
}
else{
Swal.fire('changes are not saved','','info')
}
})

  }

}
