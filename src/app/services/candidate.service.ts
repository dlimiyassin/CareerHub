import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from '../models/candidate.model';
import { Postulation } from '../models/postulation.model';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  private api = 'http://localhost:3000/candidates';

  constructor(private http : HttpClient) { }


  getCandidates() : Observable<any>{
    return this.http.get(this.api)
  }

  getCandidateById(id : string) : Observable<any>{
    return this.http.get(`${this.api}/${id}`)
  }

  updateCandidate(candidate : Candidate) : Observable<any>{
    return this.http.put(`${this.api}/${candidate.id}`,candidate)
  }

  deleteCandidate(id : number) : Observable<any>{
    return this.http.delete(`${this.api}/${id}`)
  }

  addPost(post : Postulation) : Observable<any>{
    return this.http.post('http://localhost:3000/postulations',post)
  }

  getPosts() : Observable<Postulation[]>{
    return this.http.get<Postulation[]>('http://localhost:3000/postulations')
  }
}
