import { Component } from '@angular/core';
<<<<<<< HEAD
import { Postulation } from '../../models/postulation.model';
import { Offer } from '../../models/offer.model';
import { Candidate } from '../../models/candidate.model';
=======
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
>>>>>>> a04283a323bb28f4b6e890027a585f6af7e2ef42

@Component({
  selector: 'app-dash-condidat',
  templateUrl: './dash-condidat.component.html',
  styleUrl: './dash-condidat.component.css'
})
export class DashCondidatComponent {
<<<<<<< HEAD

  postulations : Postulation[]=[]

  constructor(){}

  postuler(offer : Offer,candidate :Candidate){
    const newPostulation : Postulation = {
      id : this.postulations.length + 1 ,
      date : new Date(),
      candidate : candidate,
      offer : offer
    }

    this.postulations.push(newPostulation)

  }

=======
constructor(private route : Router, private authService : AuthService){}
signOut(){
  this.authService.clearLocalStorage()
  this.route.navigateByUrl("/sign-in")
}
>>>>>>> a04283a323bb28f4b6e890027a585f6af7e2ef42
}
