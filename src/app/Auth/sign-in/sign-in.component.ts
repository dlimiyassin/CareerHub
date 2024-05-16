import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Account } from '../../models/account.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  constructor(private builedr : FormBuilder,private authService : AuthService){}

  Loginform : FormGroup = this.builedr.group({
  email    : [null, [Validators.email]],
  password : [null, [Validators.minLength(4)]]
  })

  accounts : Account[] = []
  signIn(){
    const creed = this.Loginform.value
    
  }


}
