import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthCompanyGuardService {
  constructor(private authService : AuthService , private router : Router) { }

  canActivate(): boolean {
  if(this.authService.isAuthenticated() && this.authService.getRole()=='COMPANY'){
    return true
  }
  else{
    this.router.navigate(['/sign-in'])
    return false
  }
  }
}
