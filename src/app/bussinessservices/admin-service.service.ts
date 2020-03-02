import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from'@angular/common/http';
import { Admin } from '../bussinessclass/admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  url="";
  constructor(private http:HttpClient) { }

  createAdmin(adminData:Admin):Observable<Admin>
  {
    const httpOptions={headers:new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.post<Admin>(this.url+'/Admin/CreateAdmin',adminData,httpOptions);
  }
}
