import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Training';
  addProduct(form:any)
  {
  //console.log(form);
/*let pname=form.pname;
let price=form.;
let quantity=form.qn;*/
console.log(form.pname,form.price,form.quantity);

  }
}
