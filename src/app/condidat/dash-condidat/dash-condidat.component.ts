import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dash-condidat',
  templateUrl: './dash-condidat.component.html',
  styleUrl: './dash-condidat.component.css'
})
export class DashCondidatComponent {
constructor(private route : Router, private authService : AuthService){}
signOut(){
  this.authService.clearLocalStorage()
  this.route.navigateByUrl("/sign-in")
}
}
