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

  postulations : Postulation[]=[]
  offers : Offer[] = []
  ngOnInit(): void {

  }

  postuler(offer : Offer,candidate :Candidate){
    const newPostulation : Postulation = {
      id : this.postulations.length + 1 ,
      date : new Date(),
      candidate : candidate,
      offer : offer
    }
    this.postulations.push(newPostulation)
  }


signOut(){
  this.authService.clearLocalStorage()
  this.route.navigateByUrl("/sign-in")
  }

}
