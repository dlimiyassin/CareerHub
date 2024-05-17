import { Component } from '@angular/core';
import { Postulation } from '../../models/postulation.model';
import { Offer } from '../../models/offer.model';
import { Candidate } from '../../models/candidate.model';

import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
<<<<<<< HEAD

=======
>>>>>>> 2f3b077f473be86f83d32d1f5f817ebf0dda6f03

@Component({
  selector: 'app-dash-condidat',
  templateUrl: './dash-condidat.component.html',
  styleUrl: './dash-condidat.component.css'
})
export class DashCondidatComponent {
<<<<<<< HEAD

  postulations : Postulation[]=[]

  constructor(private route : Router, private authService : AuthService){}

=======

  constructor(private route : Router, private authService : AuthService){}

  postulations : Postulation[]=[]

>>>>>>> 2f3b077f473be86f83d32d1f5f817ebf0dda6f03
  postuler(offer : Offer,candidate :Candidate){
    const newPostulation : Postulation = {
      id : this.postulations.length + 1 ,
      date : new Date(),
      candidate : candidate,
      offer : offer
    }

    this.postulations.push(newPostulation)

  }

<<<<<<< HEAD


=======
>>>>>>> 2f3b077f473be86f83d32d1f5f817ebf0dda6f03
signOut(){
  this.authService.clearLocalStorage()
  this.route.navigateByUrl("/sign-in")
}

}
