import { Component, OnInit } from '@angular/core';
import { Offer } from '../../models/offer.model';
import { HttpClient } from '@angular/common/http';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company.model';
import { Observable } from 'rxjs';
import { OfferService } from '../../services/offer.service';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-offer-company',
  templateUrl: './offer-company.component.html',
  styleUrl: './offer-company.component.css'
})
export class OfferCompanyComponent{
  company! : Company
  offers : Offer[]=[]
  candidates : Candidate[]=[]
  showCandidate : boolean = false

  constructor(private companyService  : CompanyService,private offerService : OfferService){}


  

  getOffers(id : number) : void{
  this.companyService.getCompanyById(id).subscribe((data)=>{
    this.company = data
  })
  this.offers = this.company.offers
  }

  getCandidatesPostuler(id : number){
  this.offerService.getCandidatesPostuler(id).subscribe((data)=>{
  this.candidates = data
  })
  this.showCandidate = true
  }

}
