import { AuthService } from './../../services/auth.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Offer } from '../../models/offer.model';
import { HttpClient } from '@angular/common/http';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company.model';
import { OfferService } from '../../services/offer.service';
import { Candidate } from '../../models/candidate.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-offer-company',
  templateUrl: './offer-company.component.html',
  styleUrl: './offer-company.component.css'
})
export class OfferCompanyComponent implements OnInit{


  constructor(private companyService  : CompanyService,
    private offerService : OfferService,
    private router : Router,
    private formBuilder : FormBuilder,
    private modalService : BsModalService,
    private authService : AuthService){}


  company! : Company

  offers : Offer[]= []
  candidates : Candidate[]=[]

  form : FormGroup = this.formBuilder.group({
    title : [null,Validators.minLength(3)],
    place : [null,Validators.minLength(5)],
    salary: [null],
    description : [null,Validators.minLength(10)]
  })
  edit : FormGroup = this.formBuilder.group({
    title : [null,Validators.minLength(3)],
    place : [null,Validators.minLength(5)],
    salary: [null],
    description : [null,Validators.minLength(10)]
  })

  modal? : BsModalRef

  ngOnInit(): void {
    const userId = this.authService.getUserID()
    this.getCompany(userId as string)
  }


  getCompany(id : string){
    this.companyService.getCompanyById(id).subscribe({
      next: company => {  this.company  = company,
                          this.offers = company.offers
                         console.log(this.company);
      },
      error: err => {console.log(err);
      }
    })
  }
  //********  l'ajout **********
  addOffer(){
  if(this.form.valid){

    const off : Offer = {
      id : this.generateOfferId() as string,
      title : this.form.get('title')?.value ,
      place : this.form.get('place')?.value,
      salary : this.form.get('salary')?.value ,
      description: this.form.get('description')?.value
    }
    this.company.offers.push(off)
    this.offerService.addOffer(this.company,this.company.id as string).subscribe({
      next : (company) => {
        this.offers = company.offers
        this.form.reset()
        this.modal?.hide()
      }
    })
  }
  }

  openModal(template: any) {
    this.modal = this.modalService.show(template);
  }

  // ****** update *******

  update(){

  }

  openUpdate(templateEdit : any,id?:string){
    this.modal = this.modalService.show(templateEdit)
    this.offerService.getOfferById(id)
  }

  // ****** delete *******
  delete(id? : string){
    this.company.offers.filter(offer => { offer.id != id })
    this.offerService.deleteOffer(this.company,id).subscribe({
      next :company => { this.offers = company.offers },
      error:err     => { console.log(err); }
    })
  }

   generateOfferId(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 4; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}
}
