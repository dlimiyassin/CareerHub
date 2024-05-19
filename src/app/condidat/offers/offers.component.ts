import { Postulation } from './../../models/postulation.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from '../../models/offer.model';
import { AuthService } from '../../services/auth.service';
import { CompanyService } from '../../services/company.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CandidateService } from '../../services/candidate.service';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  constructor(private modalService : BsModalService, private authService : AuthService,private companyService : CompanyService, private candidateService : CandidateService){}

  postulations : Postulation[]=[]

  offers : Offer[] = []
  ngOnInit(): void {
    this.getAllOffers()  
  }
  modal? : BsModalRef
  openModal(template: any, offer_id : string | undefined) {
    this.modal = this.modalService.show(template);
    this.offer_id = offer_id
  }
  offer_id : string | undefined
  company_id   : string | undefined
  candidate_id : string | undefined
  offer_note : string | undefined
  apply(){
    this.getCompanyByOffer(this.offer_id)
    this.candidate_id = this.authService.getUserID() as string
    const post : Postulation | undefined = {
      offer_id : this.offer_id as string,
      candidate_id : this.candidate_id,
      company_id : this.company_id as string,
      date : new Date(),
      note : this.offer_note as string
    }
    this.candidateService.addPost(post).subscribe({
      next : data => {console.log(data); this.modal?.hide() ;this.offer_note=''}
    })
  }


  getCompanyByOffer(offerId : string | undefined){
  this.companyService.getCompanies().subscribe({
    next: companies => {
      companies.some(company => {
        return company.offers.some(offer => {
          if (offer.id == offerId) {
            this.company_id = company.id;
            return true;
          }
          return false;
        });
      });
    },
    error: err => {console.error(err);}
  });
}


getAllOffers(){
  this.companyService.getCompanies().subscribe({
    next: comapnies => {
      comapnies.forEach(company => {
        company.offers.forEach(offer => {this.offers.push(offer)})
      });
      
    },
    error:err => console.log(err)
  })
}
}
