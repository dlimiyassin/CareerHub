import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../models/candidate.model';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-candidate-company',
  templateUrl: './candidate-company.component.html',
  styleUrl: './candidate-company.component.css'
})
export class CandidateCompanyComponent implements OnInit{

  candidates : Candidate[]=[]

  constructor(private candidateService : CandidateService){}

  ngOnInit(): void {
      this.getCandidates()
  }

  getCandidates(){
    this.candidateService.getCandidates().subscribe((data)=>{
      this.candidates = data
    })
  }

}
