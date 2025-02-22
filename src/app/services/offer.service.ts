import { Company } from './../models/company.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Candidate } from '../models/candidate.model';
import { Postulation } from '../models/postulation.model';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  candidates : Candidate[]=[]

  private api = 'http://localhost:3000/offers'
  private apiP = 'http://localhost:3000/postulations'

  constructor(private http : HttpClient) { }

  addOffer(company : Company) : Observable<Company>{
    const url = `http://localhost:3000/companies/${company.id}`
  return  this.http.put<Company>(url,company)
  }

  deleteOffer(company : Company) : Observable<Company>{
    const url = `http://localhost:3000/companies/${company.id}`
      return this.http.put<Company>(url,company)
  }



  getOfferById(id? : string) : Observable<any> {
    return this.http.get(`${this.api}/${id}`)
  }

  getCandidatesPostuler(id : string) : Observable<any>{
    return this.http.get<Postulation[]>(this.apiP)
    }

  getPostulation() : Observable<any>{
    return this.http.get<Postulation[]>(this.apiP)
  }
}
