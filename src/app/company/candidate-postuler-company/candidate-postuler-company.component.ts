import { Component, Input, OnInit, Output } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { Candidate } from '../../models/candidate.model';
import { Postulation } from '../../models/postulation.model';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-candidate-postuler-company',
  templateUrl: './candidate-postuler-company.component.html',
  styleUrl: './candidate-postuler-company.component.css'
})
export class CandidatePostulerCompanyComponent implements OnInit {
 
  constructor(private offerService : OfferService,private route : ActivatedRoute ){}
 
  canidates : Candidate[]=[]
  id! : number

  ngOnInit(): void {
  this.route.params.subscribe(params=>{
    this.id = params['id']
  })
  }


/*   getCandidatePostuler(){
  this.offerService.getCandidatesPostuler(String(this.id)).subscribe((data)=>{
    this.canidates = data
  })
  } */

}
