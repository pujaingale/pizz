import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
//url:'https://localhost:44329';
constructor(private http:HttpClient) { }
getAllEmployee(): Observable<Employee[]>
{
  return this.http.get<Employee[]>('https://localhost:44329/weatherforecast');
}

createEmployee(employee:Employee):Observable<Employee>
{
  const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})};
  return this.http.post<Employee>('https://localhost:44329/weatherforecast',employee,httpOptions);
}

}