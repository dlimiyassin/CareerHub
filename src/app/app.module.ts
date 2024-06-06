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
import { CandidatePostulerCompanyComponent } from './company/candidate-postuler-company/candidate-postuler-company.component';
import { CompleteProfileComponent } from './condidat/complete-profile/complete-profile.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ProfileComponent } from './condidat/profile/profile.component';
import { PostsComponent } from './condidat/posts/posts.component';
import { OffersComponent } from './condidat/offers/offers.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'

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
    CandidatePostulerCompanyComponent,
    CompleteProfileComponent,
    ProfileComponent,
    PostsComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    LazyLoadImageModule,
    ModalModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
