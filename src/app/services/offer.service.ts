import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Offer } from '../models/offer.model';
import { Company } from '../models/company.model';
import { Candidate } from '../models/candidate.model';
import { Postulation } from '../models/postulation.model';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  candidates : Candidate[]=[]

  private api = 'http://localhost:3000/offers'
  private apiP = 'http://localhost:3000/postulation'

  constructor(private http : HttpClient) { }

  addOffer(crenditials : any) : Observable<any>{
  return  this.http.post<Object>(this.api,crenditials)
  }

  getAllOffers() : Observable<any>{
    return this.http.get(this.api)
  }

  updateOffer(offer : Offer,id : number) : Observable<any>{
    return this.http.put(`${this.api}/${id}`,offer)
  }

  deleteOffer(id? : number) : Observable<any>{
    return this.http.delete(`${this.api}/${id}`)
  }

  getOfferById(id? : number) : Observable<any> {
    return this.http.get(`${this.api}/${id}`)
  }

  getCandidatesPostuler(id : number) : Observable<any>{
    return this.http.get<Postulation[]>(this.apiP).pipe(
      map((postulations : Postulation[])=>
      postulations
      .filter(postulation=> postulation.offer.id = id )
      .map(postulation => postulation.candidate)
    ))
    }
}
