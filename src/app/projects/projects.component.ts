import { Component } from '@angular/core';
import { Project } from '../models/project.model';

@Component({
  standalone: true,
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: []
})
export class ProjectsComponent {
  projects: Project[] = [
    new Project(
      'Hangman game',
      'A mini web app with the classic hangman game!',
      'assets/images/hangman.png',
      'https://ricardoreais.github.io/hangman/'
    ),
    new Project('Keyword search', 'An autocomplete search with highlights!', 'assets/images/keyword-search.png', 'https://ricardoreais.github.io/keyword-search/')
  ];
}
