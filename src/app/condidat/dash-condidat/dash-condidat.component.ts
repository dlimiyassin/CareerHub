import { Component } from '@angular/core';
import { Postulation } from '../../models/postulation.model';
import { Offer } from '../../models/offer.model';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-dash-condidat',
  templateUrl: './dash-condidat.component.html',
  styleUrl: './dash-condidat.component.css'
})
export class DashCondidatComponent {

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

}
