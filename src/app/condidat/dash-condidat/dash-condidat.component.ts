import { Component, OnInit } from '@angular/core';
import { Postulation } from '../../models/postulation.model';
import { Offer } from '../../models/offer.model';
import { Candidate } from '../../models/candidate.model';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-dash-condidat',
  templateUrl: './dash-condidat.component.html',
  styleUrl: './dash-condidat.component.css'
})


export class DashCondidatComponent{
  constructor(private route : Router, private authService : AuthService){}

  signOut(){
  this.authService.clearLocalStorage()
  this.route.navigateByUrl("/sign-in")
  }

}
