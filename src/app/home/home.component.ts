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
  backgroundImage!: string;

  ngOnInit() {
    const img = new Image();
    img.src = '../../assets/img/background.jpg';
    img.onload = () => {
      this.backgroundImage = img.src;
    };
  }
}
