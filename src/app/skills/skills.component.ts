import { Component } from '@angular/core';
import { NgbProgressbar } from '@ng-bootstrap/ng-bootstrap';
import { Skill } from '../models/skill.model';

@Component({
  standalone: true,
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  imports: [NgbProgressbar]
})
export class SkillsComponent {
  skills: Skill[] = [
    new Skill('JavaScript', 'Good', 85),
    new Skill('C#', 'Damn!', 100),
    new Skill('HTML5', 'Good', 85),
    new Skill('CSS3', 'Competent', 65),
    new Skill('T-SQL', 'Modest', 55),
    new Skill('Java', 'Competent', 65)
  ];
}
