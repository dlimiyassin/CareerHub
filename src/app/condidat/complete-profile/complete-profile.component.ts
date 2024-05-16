
import { Component } from '@angular/core';


@Component({
  selector: 'app-complete-profile',
  templateUrl: './complete-profile.component.html',
  styleUrl: './complete-profile.component.css'
})
export class CompleteProfileComponent {

  skills : string[] = []
  newSkill = ''
  addSkill(){

    this.skills.push(this.newSkill)
    console.log(this.skills);
    this.newSkill=''   
  }
  completeProfile(){}
}
