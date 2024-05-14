import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CandidateComponent } from './candidate/candidate.component';

const routes: Routes = [
  {path:'', component:HomeComponent, title: 'Home'},
  { path : 'candidate' , component : CandidateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
