import { Component, OnInit } from '@angular/core';
import { Postulation } from '../../models/postulation.model';
import { Offer } from '../../models/offer.model';
import { Candidate } from '../../models/candidate.model';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dash-condidat',
  templateUrl: './dash-condidat.component.html',
  styleUrl: './dash-condidat.component.css'
})
export class DashCondidatComponent implements OnInit{

  constructor(private route : Router, private authService : AuthService){}


  offers : Offer[] = []

  ngOnInit(): void {
    this.getOffers();
  }


  getOffers(){
    
  }









  signOut(){
  this.authService.clearLocalStorage()
  this.route.navigateByUrl("/sign-in")
  }

}
