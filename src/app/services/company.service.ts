import { Injectable, OnInit } from '@angular/core';
import { Company } from '../models/company.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService implements OnInit{
  company! : Company

  private api = 'http://localhost:3000/company';
  constructor(private http : HttpClient) { }


  ngOnInit(): void {

  }

  getCompanyById(id : number) : Observable<Company>{
  return this.http.get<Company>(`${this.api}/${id}`)
  }
}
