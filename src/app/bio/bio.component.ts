import { Component } from '@angular/core';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  standalone: true,
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
  imports: [SkillsComponent]
})
export class BioComponent {

}
