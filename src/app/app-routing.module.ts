import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

import { CompanySignUpComponent } from './Auth/company-sign-up/company-sign-up.component';
import { CondidatSignUpComponent } from './Auth/condidat-sign-up/condidat-sign-up.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { ChooseSignMethodComponent } from './Auth/choose-sign-method/choose-sign-method.component';
import { DashCondidatComponent } from './condidat/dash-condidat/dash-condidat.component';
import { DashCompanyComponent } from './company/dash-company/dash-company.component';
import { CompleteProfileComponent } from './condidat/complete-profile/complete-profile.component';
import { OfferCompanyComponent } from './company/offer-company/offer-company.component';
import { CandidateCompanyComponent } from './company/candidate-company/candidate-company.component';
import { CandidatePostulerCompanyComponent } from './company/candidate-postuler-company/candidate-postuler-company.component';
import { ProfileComponent } from './condidat/profile/profile.component';
import { PostsComponent } from './condidat/posts/posts.component';
import { OffersComponent } from './condidat/offers/offers.component';

import { NoAuthGuardService } from './guards/auth-no-guard.service';
import { AuthCompanyGuardService } from './guards/auth-company-guard.service';
import { AuthCandidateGuardService } from './guards/auth-candidate-guard.service';

const routes: Routes = [
  {path:'', component:HomeComponent, title: 'Home',canActivate :[NoAuthGuardService]},
  {path:'company-sign-up', component:CompanySignUpComponent, title: 'Sign Up',canActivate :[NoAuthGuardService]},
  {path:'condidat-sign-up', component:CondidatSignUpComponent, title: 'Sign Up',canActivate :[NoAuthGuardService]},
  {path:'choose-sign', component:ChooseSignMethodComponent, title: 'Sign Up',canActivate :[NoAuthGuardService]},
  {path:'sign-in', component:SignInComponent, title: 'Sign Up',canActivate :[NoAuthGuardService]},


  {
  path:'candidate',
  component : DashCondidatComponent,
   children : [
    {path:'cv', component:CompleteProfileComponent, title:'Profile'},
    {path:'offers', component:OffersComponent, title:'Offers'},
    {path:'profile', component:ProfileComponent, title:'Profile'},
    {path:'posts', component:PostsComponent, title:'Posts'}
  ],canActivate : [AuthCandidateGuardService]
},


  {
  path:'company',
  component:DashCompanyComponent,
  children : [
   {path:'offer', component : OfferCompanyComponent, title : 'Offer'},
   {path : 'candidate', component : CandidateCompanyComponent , title :'candidate'},
   {path : 'candidates-post/:id', component : CandidatePostulerCompanyComponent, title:'Posts'}
 ], canActivate : [AuthCompanyGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
