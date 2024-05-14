import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-candidate-postuler-company',
  templateUrl: './candidate-postuler-company.component.html',
  styleUrl: './candidate-postuler-company.component.css'
})
export class CandidatePostulerCompanyComponent implements OnInit {
  canidates : Candidate[]=[]
  
  ngOnInit(): void {
  }

  constructor(private offerService : OfferService){}

  getCandidatePostuler(id : number){
  this.offerService.getCandidatesPostuler(id).subscribe((data)=>{
    this.canidates = data
  })
  }
}
