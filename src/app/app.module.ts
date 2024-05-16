import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CompanySignUpComponent } from './Auth/company-sign-up/company-sign-up.component';
import { CondidatSignUpComponent } from './Auth/condidat-sign-up/condidat-sign-up.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { ChooseSignMethodComponent } from './Auth/choose-sign-method/choose-sign-method.component';
import { DashCondidatComponent } from './condidat/dash-condidat/dash-condidat.component';
import { DashCompanyComponent } from './company/dash-company/dash-company.component';
import { OfferCompanyComponent } from './company/offer-company/offer-company.component';
import { CandidateCompanyComponent } from './company/candidate-company/candidate-company.component';
import { OfferCandidateComponent } from './condidat/offer-candidate/offer-candidate.component';
import { CandidatePostulerCompanyComponent } from './company/candidate-postuler-company/candidate-postuler-company.component';
import { CompleteProfileComponent } from './condidat/complete-profile/complete-profile.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanySignUpComponent,
    CondidatSignUpComponent,
    SignInComponent,
    ChooseSignMethodComponent,
    DashCondidatComponent,
    DashCompanyComponent,
    OfferCompanyComponent,
    CandidateCompanyComponent,
    OfferCandidateComponent,
    CandidatePostulerCompanyComponent,
    CompleteProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
