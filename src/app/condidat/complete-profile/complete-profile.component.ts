import { Candidate } from './../../models/candidate.model';

import { Component } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrl: './complete-profile.component.css'
})
export class CompleteProfileComponent {
  constructor(private candidateService: CandidateService, private authService: AuthService,private route : Router){}

  ngOnInit(): void {
    this.candidateService.getCandidates().subscribe({
      next:(candidates) => {
        this.updatedCandidate = candidates.find((candidate : Candidate) => candidate.email = this.authService.getEmail() as string)
      }
    })
  }

  skills : string[] = []
  newSkill = ''
  cv = ''
  updatedCandidate! : Candidate
  addSkill(){
    this.skills.push(this.newSkill)
    this.newSkill=''
    this.updatedCandidate.skils = this.skills
    console.log(this.updatedCandidate);

  }

  completeProfile(){

    this.updatedCandidate.cv = this.cv
    this.candidateService.updateCandidate(this.updatedCandidate).subscribe(data => console.log(data))
    this.route.navigateByUrl("/candidate/offers")
  }
}
