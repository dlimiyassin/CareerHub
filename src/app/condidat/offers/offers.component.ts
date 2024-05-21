import { Postulation } from './../../models/postulation.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from '../../models/offer.model';
import { AuthService } from '../../services/auth.service';
import { CompanyService } from '../../services/company.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CandidateService } from '../../services/candidate.service';
import { Observable, map, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
  constructor(private modalService : BsModalService, private authService : AuthService,private companyService : CompanyService, private candidateService : CandidateService,private toaster : ToastrService){}

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
  offer_id     : string | undefined
  company_id   : string | undefined
  candidate_id : string | undefined
  offer_note   : string | undefined
  company_name : string | undefined


  apply(){
    this.candidate_id = this.authService.getUserID() as string    
    this.getCompanyByOffer(this.offer_id).subscribe({
      next: data => {
        console.log(data);
        
        const post : Postulation | undefined = {
          company_name : data?.companyName as string,
          company_id : data?.companyId as string,
          offer_id : this.offer_id as string,
          candidate_id : this.candidate_id as string,
          date : new Date(),
          note : this.offer_note as string
        }                
        this.candidateService.addPost(post).subscribe({
          next : () => {
            this.modal?.hide();
            this.offer_note=''
            this.toaster.success("See post section","Applied Susseccfull", {timeOut : 5000})
          }
        })
      },
      error: err => {console.log(err);
      }
    })

  }


  getCompanyByOffer(offerId : string | undefined) :Observable<{companyId : string, companyName : string} | null> {
    
    if(offerId == undefined){
      return of(null)
    }

    return this.companyService.getCompanies().pipe(
      map(companies => {
        for (let company of companies) {
          for (let offer of company.offers) {
            if (offer.id === offerId) {
              return { companyId: company.id as string, companyName: company.companyName as string };
            }
          }
        }
        return null;
      })
    );
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
