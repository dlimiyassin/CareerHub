import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CompanySignUpComponent } from './Auth/company-sign-up/company-sign-up.component';
import { CondidatSignUpComponent } from './Auth/condidat-sign-up/condidat-sign-up.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { ChooseSignMethodComponent } from './Auth/choose-sign-method/choose-sign-method.component';

const routes: Routes = [
  {path:'', component:HomeComponent, title: 'Home'},
  {path:'company-sign-up', component:CompanySignUpComponent, title: 'Sign Up'},
  {path:'condidat-sign-up', component:CondidatSignUpComponent, title: 'Sign Up'},
  {path:'choose-sign', component:ChooseSignMethodComponent, title: 'Sign Up'},
  {path:'sign-in', component:SignInComponent, title: 'Sign Up'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
