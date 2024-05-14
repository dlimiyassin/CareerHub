import { Component, OnInit } from '@angular/core';
import { Offer } from '../../models/offer.model';
import { OfferService } from '../../services/offer.service';

@Component({
  selector: 'app-offer-candidate',
  templateUrl: './offer-candidate.component.html',
  styleUrl: './offer-candidate.component.css'
})
export class OfferCandidateComponent implements OnInit{

  offers : Offer[]=[]

  constructor(private offerService : OfferService){}

  ngOnInit(): void {
  this.getAllOffers()
  }

  getAllOffers(){
    this.offerService.getAllOffers().subscribe((data)=>{
      this.offers = data
    })
  }


}
