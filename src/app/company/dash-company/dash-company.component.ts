import { Component, OnInit } from '@angular/core';
import { Candidate } from '../../models/candidate.model';
import { CandidateService } from '../../services/candidate.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dash-company',
  templateUrl: './dash-company.component.html',
  styleUrl: './dash-company.component.css'
})
export class DashCompanyComponent implements OnInit  {

  candidates : Candidate[]=[]
  i : number = 0
  constructor(private service : CandidateService, private route : Router, private authService : AuthService){

  }

  ngOnInit(): void {
     this.getCandidates()
  }


  getCandidates(){
    this.service.getCandidates().subscribe((data)=>{
      this.candidates = data
    })
  }



  delete(id : number){
    this.service.deleteCandidate(id)
  }

  
signOut(){
  this.authService.clearLocalStorage()
  this.route.navigateByUrl("/sign-in")
}
}
