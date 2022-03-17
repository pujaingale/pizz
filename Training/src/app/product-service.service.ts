import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
 URL="http://localhost:3001/products/"

  constructor(private https:HttpClient) { 
   
  }
  GetData()
  {
    return this.https.get(this.URL);
  }
  GetDataById(id:any)
  {
    return this.https.get(`${this.URL}${id}`);
  }
  AddProducts(data:any)
  {
    return this.https.post(this.URL,data);
  }
  DeleteDataById(id:any)
  {
    return this.https.delete(`${this.URL}${id}`);
  }
  }  
 
