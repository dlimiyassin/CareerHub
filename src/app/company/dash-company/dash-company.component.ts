import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../models/candidate.model';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-dash-company',
  templateUrl: './dash-company.component.html',
  styleUrl: './dash-company.component.css'
})
export class DashCompanyComponent implements OnInit  {

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
