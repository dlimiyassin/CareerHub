import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Company } from '../../models/company.model';
import { Account } from '../../models/account.model';
import { Candidate } from '../../models/candidate.model';

@Component({
  selector: 'app-company-sign-up',
  templateUrl: './company-sign-up.component.html',
  styleUrl: './company-sign-up.component.css'
})
export class CompanySignUpComponent {

  constructor(private authService : AuthService,
    private fromBuilder : FormBuilder,
    private route : Router){}
candidates : Candidate[] = []
companies : Company[]=[]
ngOnInit(): void {
  this.fetchUsers()
}

companyForm : FormGroup = this.fromBuilder.group({
companyName : [null,[Validators.required, Validators.minLength(4)]],
phone     : [null,[Validators.required, Validators.minLength(10)]],
email     : [null,[Validators.required, Validators.email, this.isEmailValidate.bind(this)]],
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
const cred : Company = {
companyName : this.companyForm.get('companyName')?.value,
phone     : this.companyForm.get('phone')?.value,
email     : this.companyForm.get('email')?.value,
password  : this.companyForm.get('password')?.value,
role      : "COMPANY",
LoggedIn  : false,
offers    : []
}
this.authService.signUpCompany(cred).subscribe({
next: (rep) => {
this.route.navigateByUrl("/sign-in")
this.companyForm.reset()
},
error: (err) => {console.log(err);
}
})
}

}
