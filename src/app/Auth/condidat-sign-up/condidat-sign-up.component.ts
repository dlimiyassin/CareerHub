import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Candidate } from '../../models/candidate.model';
import { Account } from '../../models/account.model';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-condidat-sign-up',
  templateUrl: './condidat-sign-up.component.html',
  styleUrl: './condidat-sign-up.component.css'
})
export class CondidatSignUpComponent {

constructor(private authService : AuthService,
            private fromBuilder : FormBuilder,
            private route : Router){}

candidates : Candidate[] = []
companies : Company[]=[]

ngOnInit(): void {
  this.fetchUsers()
}

condidatForm : FormGroup = this.fromBuilder.group({
  firstName : [null,[Validators.required, Validators.minLength(4)]],
  lastName  : [null,[Validators.required, Validators.minLength(4)]],
  phone     : [null,[Validators.required, Validators.minLength(10)]],
  email     : [null,[Validators.required, Validators.email,this.isEmailValidate.bind(this)]],
  password  : [null,[Validators.required, Validators.minLength(4),Validators.maxLength(12)]]
})


isEmailValidate(control: AbstractControl){
  let isExist : boolean = this.eamilCheck(control.value)
  if(!isExist){
    return null
  } 
  return { emailValidate : true }
}


eamilCheck(email : string) : boolean{
  if(this.isExist(this.candidates,email) || this.isExist(this.companies,email)){
    return true
  }else {
    return false
  }
  }
  
  isExist(users : Candidate[] | Company[], email :string) : boolean {
    const isExist = false
    for(const user of users){
      if (user.email == email) {
        return true
      }
    }
    return isExist
  }

  fetchUsers(){
    this.authService.getCandidates().subscribe({
      next : (users) => {
        this.candidates = users
      },
      error: (err) => {console.log(err);
      }
    })
    this.authService.getCompanies().subscribe({
      next : (users) => {
      this.companies = users        
      },
      error: (err) => {}
    })
  }

signUp(){
    const cred : Candidate = {
      firstName : this.condidatForm.get('firstName')?.value,
      lastName  : this.condidatForm.get('lastName')?.value,
      phone     : this.condidatForm.get('phone')?.value,
      email     : this.condidatForm.get('email')?.value,
      password  : this.condidatForm.get('password')?.value,
      role      : "CONDIDAT",
      LoggedIn  : false,
      cv        : '',
      skils     : []
    }
    this.authService.signUpCandidate(cred).subscribe({
      next: (rep) => {
        this.route.navigateByUrl("/sign-in")
        this.condidatForm.reset()
      },
      error: (err) => {console.log(err);
      }
    })  
  }
}
