import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Offer } from '../../models/offer.model';
import { HttpClient } from '@angular/common/http';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company.model';
import { Observable } from 'rxjs';
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
  company! : Company
  offers : Offer[]=[]
  candidates : Candidate[]=[]
  form! : FormGroup
  edit! : FormGroup
  modal? : BsModalRef

  ngOnInit(): void {

      this.getAllOffers()
      this.form = this.formBuilder.group({
        title : [null,Validators.minLength(3)],
        place : [null,Validators.minLength(5)],
        salary: [null],
        description : [null,Validators.minLength(10)]
      })
      this.edit = this.formBuilder.group({
        title : [null,Validators.minLength(3)],
        place : [null,Validators.minLength(5)],
        salary: [null],
        description : [null,Validators.minLength(10)]
      })

  }


  constructor(private companyService  : CompanyService,
              private offerService : OfferService,
              private router : Router,
              private formBuilder : FormBuilder,
              private modalService : BsModalService){}


  getAllOffers(){
  this.offerService.getAllOffers().subscribe((data)=>{
  this.offers = data
  })
  }


  //********  l'ajout **********
  addOffer(){
  if(this.form.valid){
    const off : Offer = {
      title : this.form.get('title')?.value ,
      place : this.form.get('place')?.value,
      salary : this.form.get('salary')?.value ,
      description: this.form.get('description')?.value
    }
    this.offerService.addOffer(off).subscribe({
      next : (data) => {
        console.log(data)
        this.getAllOffers()
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


  openUpdate(templateEdit : any,id?:number){
    this.modal = this.modalService.show(templateEdit)
    this.offerService.getOfferById(id)
  }


  // ****** delete *******
  delete(id? : number){
    this.offerService.deleteOffer(id).subscribe()
    this.getAllOffers()
  }




}
