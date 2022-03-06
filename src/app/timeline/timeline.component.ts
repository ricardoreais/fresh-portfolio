import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/experience.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  experiences: Experience[] = [
    // Farfetch.
    new Experience('Full-stack Software Engineer', 'Farfetch - Lisbon, Portugal — November 2020 - Present', [
      '• Developed new features for the purchase experience',
    ], 'assets/images/farfetch-logo.jpg'),
    // Vortal.
    new Experience('Full-stack Software Engineer', 'Vortal - Lisbon, Portugal — September 2018 - November 2020', [
      '• Developed a middleware application for e-procurement using .NET Core and design patterns such as IoC (dependency injection)',
      '• Unit testing of all code pushed to production',
      '• Integrated with the Journal of the European Union API to get contract notices published in the EU',
      '• Created reusable Angular 2+ module and components for file uploading',
      '• Release planning and management using SCRUM methodologies and Azure DevOps as management tool',
      '• Implemented CI/CD in Azure Pipelines, which reduced by 30% the deployment time of the application'
    ], 'assets/images/vortal-logo.jpg'),
    // CGI.
    new Experience('Full-stack Software Developer', 'CGI - Lisbon, Portugal — August 2017 - August 2018', [
      '• Created AngularJS directives to prevent input mistakes in an user interface',
      '• Structured reusable components for each independent feature',
      '• Tested code weekly using Jasmine and MSTest and kept approx. 5100 automated unit tests with a code coverage above 90%',
      '• Designed and implemented web services using WCF in order to send SOAP messages',
      '• Defined a REST ASP.NET Web API to get and save user data'
    ], 'assets/images/cgi-logo.jpg'),

  ];
  constructor() {}

  ngOnInit() {}
}
