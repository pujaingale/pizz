import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

prodDat=[{id:1,name:"puja",age:20},
{id:2,name:"Umesh",age:30}];



  constructor() { }

  ngOnInit(): void {
    console.log(this.prodDat);
  }
 

}
