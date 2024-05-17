import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Candidate } from '../models/candidate.model';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  signUpCompany(credentials : Company) : Observable<Company> {
    return this.http.post<Company>("http://localhost:3000/companies",credentials)
  }
  signUpCandidate(credentials : Candidate) : Observable<Candidate> {
    return this.http.post<Candidate>("http://localhost:3000/candidates",credentials)
  }
  getCandidates() : Observable<Candidate[]> {
    return this.http.get<Candidate[]>("http://localhost:3000/candidates")
  }
  getCompanies() : Observable<Company[]> {
    return this.http.get<Company[]>("http://localhost:3000/companies")
  }
  saveToLocalStorage(user : any){
    localStorage.setItem('id', user.id)
    localStorage.setItem('email', user.email)
    localStorage.setItem('role', user.role)
    localStorage.setItem('LoggedIn', String(user.LoggedIn))
    
  }
  getEmail(){
    return localStorage.getItem('email')    
  }

  getUserID(){
    return localStorage.getItem('id')    
  }
  
  clearLocalStorage(){
    localStorage.clear()
  }
}
