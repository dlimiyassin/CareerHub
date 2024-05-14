import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  signUp(credentials : any) : Observable<Object> {
    return this.http.post<Object>("http://localhost:3000/accounts",credentials)
  }
  getAccounts() : Observable<[]> {
    return this.http.get<[]>("http://localhost:3000/accounts")
  }
}
