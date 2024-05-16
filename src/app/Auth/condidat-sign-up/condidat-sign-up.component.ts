import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Candidate } from '../../models/candidate.model';
import { Account } from '../../models/account.model';

@Component({
  selector: 'app-condidat-sign-up',
  templateUrl: './condidat-sign-up.component.html',
  styleUrl: './condidat-sign-up.component.css'
})
export class CondidatSignUpComponent {

constructor(private authService : AuthService,
            private fromBuilder : FormBuilder,
            private route : Router){}

ngOnInit(): void {

}

condidatForm : FormGroup = this.fromBuilder.group({
  firstName : [null,[Validators.minLength(4)]],
  lastName  : [null,[Validators.minLength(4)]],
  phone     : [null,[Validators.minLength(4)]],
  email     : [null,[Validators.email]],
  password  : [null,[Validators.minLength(4),Validators.maxLength(12)]]
})


signUp(){
    const cred : Candidate = {
      firstName : this.condidatForm.get('firstName')?.value,
      lastName  : this.condidatForm.get('lastName')?.value,
      phone     : this.condidatForm.get('phone')?.value,
      email     : this.condidatForm.get('email')?.value,
      password  : this.condidatForm.get('password')?.value,
      role      : "CONDIDAT",
      LoggedIn  : true,
      cv        : '',
      skils     : []
    }
    this.authService.signUpCandidate(cred).subscribe({
      next: (rep) => {
        const user : Account = {
          email : rep.email,
          role  : rep.role,
          LoggedIn : rep.LoggedIn
        }
        this.authService.saveToLocalStorage(user)
        this.route.navigateByUrl("/candidate/cv")
        this.condidatForm.reset()
      },
      error: (err) => {console.log(err);
      }
    })  
  }
}
