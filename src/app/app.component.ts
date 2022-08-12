import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  options = ['angular', 'vue', 'react'];
  skills: string[] = [];

  onSubmit(value: any) {
    value.skills = this.skills;
    console.log(value);
  }

  addSkill(skill: string) {
    this.skills.push(skill);
    //console.log(this.skills);
  }
}
  