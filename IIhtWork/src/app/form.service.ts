import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  url = 'http://localhost:65389/Api/Employee';  
  constructor(private http: HttpClient) { }
  getAllEmployee(): Observable<Employee[]> {  
    return this.http.get<Employee[]>(this.url + '/AllEmployeeDetails');  
  } 
  createEmployee(employee: Employee): Observable<Employee> {  
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
    return this.http.post<Employee>(this.url + '/InsertEmployeeDetails/',  
    employee, httpOptions);  
  }  
}
