import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-company-sign-up',
  templateUrl: './company-sign-up.component.html',
  styleUrl: './company-sign-up.component.css'
})
export class CompanySignUpComponent {

  constructor(private authService : AuthService,
    private fromBuilder : FormBuilder,
    private route : Router){}

ngOnInit(): void {

}

companyForm : FormGroup = this.fromBuilder.group({
companyName : [null,[Validators.minLength(4)]],
phone     : [null,[Validators.minLength(4)]],
email     : [null,[Validators.email]],
password  : [null,[Validators.minLength(4),Validators.maxLength(12)]]
})


signUp(){
const cred = {
companyName : this.companyForm.get('companyName')?.value,
lastName  : this.companyForm.get('lastName')?.value,
phone     : this.companyForm.get('phone')?.value,
email     : this.companyForm.get('email')?.value,
password  : this.companyForm.get('password')?.value,
role      : "Company"
}
this.authService.signUp(cred).subscribe({
next: (rep) => {
console.log(rep);
this.route.navigateByUrl("/company")
this.companyForm.reset()
},
error: (err) => {console.log(err);
}
})  
}
}
