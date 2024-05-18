import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from '../../models/offer.model';
import { Postulation } from '../../models/postulation.model';
import { AuthService } from '../../services/auth.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export class OffersComponent {
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

}
