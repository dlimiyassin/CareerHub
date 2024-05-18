import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuardService {

  constructor(private authService : AuthService , private router : Router) { }

  canActivate(): boolean {
  if(this.authService.isAuthenticated()){
    if(this.authService.getRole()=='COMPANY'){
      this.router.navigate(['/company'])
    }
    if(this.authService.getRole()=='CANDIDATE'){
      this.router.navigate(['/candidate'])
    }

    return false
  }
  else{
    return true
  }
  }
}
