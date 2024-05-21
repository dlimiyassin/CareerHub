import { Component, Input, OnInit, Output } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { Candidate } from '../../models/candidate.model';
import { Postulation } from '../../models/postulation.model';
import { map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { __param } from 'tslib';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-candidate-postuler-company',
  templateUrl: './candidate-postuler-company.component.html',
  styleUrl: './candidate-postuler-company.component.css'
})
export class CandidatePostulerCompanyComponent implements OnInit {

  constructor(private offerService : OfferService,
              private route : ActivatedRoute,
              private candidateService : CandidateService ){}

  canidates : Candidate[]=[]
  id! : string

  ngOnInit(): void {
  this.route.params.subscribe(params=>{
    this.id = params['id']
  })
  this.getCandidatePostuler()
  }


/*   getCandidatePostuler(){
  this.offerService.getCandidatesPostuler(String(this.id)).subscribe((data)=>{
    this.canidates = data
  })
  } */

    getCandidatePostuler(){
    let  postulations : Postulation[]=[]
    this.offerService.getPostulation().subscribe((data)=>{
    console.log(data)
    postulations = data
    console.log(data);

    postulations = postulations.filter(postulation => postulation.offer_id=this.id)
    postulations.forEach(elt=>{
      this.candidateService.getCandidateById(elt.candidate_id).subscribe((candidate)=>{
        this.canidates.push(candidate)
        console.log(candidate);
      })
    })
    })
    }
}
