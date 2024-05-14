import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

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
    const cred = {
      firstName : this.condidatForm.get('firstName')?.value,
      lastName  : this.condidatForm.get('lastName')?.value,
      phone     : this.condidatForm.get('phone')?.value,
      email     : this.condidatForm.get('email')?.value,
      password  : this.condidatForm.get('password')?.value,
      role      : "CONDIDAT"
    }
    this.authService.signUp(cred).subscribe({
      next: (rep) => {
        console.log(rep);
        this.route.navigateByUrl("/condidate")
        this.condidatForm.reset()
      },
      error: (err) => {console.log(err);
      }
    })  
  }
}
