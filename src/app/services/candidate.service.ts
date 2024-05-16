import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private api = 'http://localhost:3000/candidates';

  constructor(private http : HttpClient) { }


  getCandidates() : Observable<any>{
    return this.http.get(this.api)
  }

  updateCandidate(candidate : Candidate) : Observable<any>{
    return this.http.put(`${this.api}/${candidate.id}`,candidate)
  }

  deleteCandidate(id : number) : Observable<any>{
    return this.http.delete(`${this.api}/${id}`)
  }

}
