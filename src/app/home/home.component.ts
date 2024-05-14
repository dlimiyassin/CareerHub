import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Candidate } from '../models/candidate.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private http : HttpClient){}
ngOnInit(): void {

 
}
}
