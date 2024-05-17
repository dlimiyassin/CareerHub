import { Injectable, OnInit } from '@angular/core';
import { Company } from '../models/company.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private api = 'http://localhost:3000/companies';
  constructor(private http : HttpClient) { }



  getCompanyById(id : string) : Observable<Company>{
  return this.http.get<Company>(`${this.api}/${id}`)
  }
}
