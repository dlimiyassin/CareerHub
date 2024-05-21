import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../../models/account.model';
import { AuthService } from '../../services/auth.service';
import { Candidate } from '../../models/candidate.model';
import { Company } from '../../models/company.model';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {


  constructor(private builedr : FormBuilder,private authService : AuthService, private route : Router,private toaster : ToastrService){}

  Loginform : FormGroup = this.builedr.group({
  email    : [null, [Validators.required,Validators.email]],
  password : [null, [Validators.required,Validators.minLength(4)]]
  })


  candidates : Candidate[] = []
  companies  : Company[]   = []
  user : Candidate | Company | undefined


  signIn(){
  let haveAcces = false
    this.authService.getCandidates().subscribe({
      next : (users) => {
        const isExist = this.isExist(users,this.Loginform.get('email')?.value,this.Loginform.get('password')?.value)
        if(isExist){
          haveAcces = true
          console.log("candidate is exist : "+isExist);
          console.log("candidate have access : "+haveAcces);
          this.handleUser(this.user)
          this.route.navigateByUrl("/candidate/offers")
          this.toaster.success("Signed succesfully","Happy Day!", {timeOut : 4000})
        }
      },
      error: (err) => {}
    })

    this.authService.getCompanies().subscribe({
      next : (users) => {
        const isExist = this.isExist(users,this.Loginform.get('email')?.value,this.Loginform.get('password')?.value)
        if(isExist){
          haveAcces = true
          console.log("company is exist : "+isExist);
          console.log("company have access : "+haveAcces);
          this.handleUser(this.user)
          this.route.navigateByUrl("/company/offer")
          this.toaster.success("Signed succesfully","Happy Day!", {timeOut : 4000})

        }
        if(!haveAcces) {
          console.log(!haveAcces);
          
          this.toaster.error("Incorrect crediantials","Signed Failed", {timeOut : 4000})
        }  
      },
      error: (err) => {}
    })

  }


  isExist(users : Candidate[] | Company[], email :string, password : string) : boolean {
    const isExist = false
    for(const user of users){
      if (user.email == email && user.password == password) {
        this.user = user
        return true
      }
    }
    return isExist
  }


  handleUser(userr : Candidate | Company | undefined){
    const user = {
      id : userr?.id,
      email : userr?.email ,
      role  : userr?.role,
      LoggedIn : true
    }
    this.authService.saveToLocalStorage(user)
  }
}
