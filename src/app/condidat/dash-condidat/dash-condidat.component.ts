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

export class DashCondidatComponent implements OnInit{


  
  constructor(private route : Router, private authService : AuthService,private companyService : CompanyService){}
  postulations : Postulation[]=[]
  offers : Offer[] = []
  ngOnInit(): void {
    this.getAllOffers()    
  }

getAllOffers(){
  this.companyService.getCompanies().subscribe({
    next: comapnies => {
      comapnies.forEach(company => {
        company.offers.forEach(offer => {this.offers.push(offer)})
      });
      
    },
    error:err => console.log(err)
  })
}








  
  signOut(){
  this.authService.clearLocalStorage()
  this.route.navigateByUrl("/sign-in")
  }



/*   
  postuler(offer : Offer,candidate :Candidate){
    const newPostulation : Postulation = {
      id : this.postulations.length + 1 ,
      date : new Date(),
      candidate : candidate,
      offer : offer
    }
    this.postulations.push(newPostulation)
  } */
}
