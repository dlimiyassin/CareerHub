import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../services/candidate.service';
import { Candidate } from '../models/candidate.model';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrl: './candidate.component.css'
})
export class CandidateComponent implements OnInit {

  candidates : Candidate[]=[]
  i : number = 0
  constructor(private service : CandidateService){

  }

  ngOnInit(): void {
     this.getCandidates()
  }


  getCandidates(){
    this.service.getCandidates().subscribe((data)=>{
      this.candidates = data
    })
  }

  updateCandidate(candidate : Candidate){
    this.service.updateCandidate(candidate)
  }

  delete(id : number){
    this.service.deleteCandidate(id)
  }


}
