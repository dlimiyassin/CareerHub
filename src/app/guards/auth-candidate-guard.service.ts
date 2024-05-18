import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthCandidateGuardService {

  constructor(private authService : AuthService , private router : Router) { }

  canActivate(): boolean {
  if(this.authService.isAuthenticated() && this.authService.getRole()=='CANDIDATE'){
    return true
  }
  else{
    this.router.navigate(['/sign-in'])
    return false
  }
  }
}
