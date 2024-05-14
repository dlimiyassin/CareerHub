import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  signUpCompany(credentials : any) : Observable<Object> {
    return this.http.post<Object>("http://localhost:3000/companies",credentials)
  }
  signUpCandidate(credentials : any) : Observable<Object> {
    return this.http.post<Object>("http://localhost:3000/candidates",credentials)
  }
  getAccounts() : Observable<[]> {
    return this.http.get<[]>("http://localhost:3000/accounts")
  }
}
