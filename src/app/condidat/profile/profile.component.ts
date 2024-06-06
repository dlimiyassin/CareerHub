import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { ActivatedRoute } from '@angular/router';
import { Candidate } from '../../models/candidate.model';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{

  constructor(private candidateService : CandidateService,
              private route :ActivatedRoute,
              private formBuilder : FormBuilder,
              private modalService : BsModalService){}

  edit : FormGroup = this.formBuilder.group({
    id : [null],
    firstName : [null,[Validators.minLength(3),Validators.maxLength(5)]],
    lastName : [null,[Validators.minLength(3),Validators.maxLength(5)]],
    email: [null,Validators.email],
    phone : [null,Validators.maxLength(10)]
  })

  editSkills: FormGroup = this.formBuilder.group({
    skills: this.formBuilder.array([])
  });

  id! : string | null
  candidate! : Candidate
  modal? : BsModalRef
  modalSkills?: BsModalRef;
  newSkill = ''
  skills : string[] = []
  updatedCandidate! : Candidate
  cv = ''


  ngOnInit(): void {
  this.id = localStorage.getItem('id')
  if (this.id) {
    this.getCandidate(this.id);
  } else {
    console.error('No candidate ID found in localStorage');
  }
  this.candidate
  }

  getCandidate(id : string){
    this.candidateService.getCandidateById(id).subscribe((data)=>{
    this.candidate = data
    console.log(data);
  })
  }


  // ***** update Profile ******

  openUpdate(templateEdit : any,id? :string){
    this.modal = this.modalService.show(templateEdit)


    const c : Candidate | undefined = this.candidate
    this.edit.setValue({
      id : c.id,
      firstName : c?.firstName,
      lastName : c?.lastName,
      email : c?.email ,
      phone : c?.phone
    })
  }


  openUpdateSkil(templateEdit : any,id? :string){
    this.modal = this.modalService.show(templateEdit)

  }

  updateProfile(){
    const candidate : Candidate = {
      id : this.edit.get('id')?.value,
      firstName : this.edit.get('firstName')?.value ,
      lastName : this.edit.get('lastName')?.value,
      email : this.edit.get('email')?.value ,
      phone: this.edit.get('phone')?.value,
      cv : this.candidate.cv,
      skils : this.candidate.skils
    }
    this.candidateService.updateCandidate(candidate).subscribe({
      next : (data)=> this.candidate = data
    })
    this.edit.reset()
    this.modal?.hide()
  }


  // **** update Skils *****
  openUpdateSkills(templateEditSkills: any) {
    this.modalSkills = this.modalService.show(templateEditSkills);
    const skillsFormArray = this.editSkills.get('skills') as FormArray;
    skillsFormArray.clear();
    if (this.candidate && this.candidate.skils) {
      this.candidate.skils.forEach(skill => {
        skillsFormArray.push(this.formBuilder.control(skill));
      });
    }
  }

  addSkill(): void {
    if (this.newSkill.trim()) {
      const c : Candidate = this.candidate
      c.skils.push(this.newSkill)
      this.newSkill = '';
      this.candidateService.updateCandidate(c).subscribe((data)=>{
        this.candidate = data
      })
    }
  }

  removeSkill(skill: string): void {
    const c : Candidate = this.candidate
    console.log(c);
    c.skils = c.skils.filter(s=>s!== skill)
    this.candidateService.updateCandidate(c).subscribe((data)=>{
      this.candidate = data
    })
  }



  updateSkills(): void {
    this.updatedCandidate=this.candidate
    this.updatedCandidate.cv = this.cv;
    console.log(this.updatedCandidate);
    this.candidateService.updateCandidate(this.updatedCandidate).subscribe(data => console.log(data));
    this.modalSkills?.hide()
  }

 }

