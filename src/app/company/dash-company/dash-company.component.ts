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
export class DashCompanyComponent {


  constructor(private service : CandidateService, private route : Router, private authService : AuthService){

  }
  
  signOut(){
    this.authService.clearLocalStorage()
    this.route.navigateByUrl("/sign-in")
  }
}
