import { Component, OnInit } from '@angular/core';
import { Experience } from '../models/experience.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  experiences: Experience[] = [
    // Kaizen Gaming.
    new Experience('Senior Software Engineer', 'Kaizen Gaming - Lisbon, Portugal — May 2024 - Present', [
      '• Leading development of high-scale GameTech solutions',
      '• Developed and maintained software for online betting and gaming platforms',
    ], 'assets/images/kaizen-logo.jpg'),
    // Farfetch.
    new Experience('Software Engineer', 'FARFETCH - Lisbon, Portugal — November 2020 - May 2024', [
      '• Reduced monthly infrastructure costs by removing redundant microservices',
      '• Helped cut down yearly address auto-complete provider costs by switching provider',
      '• Built APIs with OAuth 2.0 authorization and managed their deployments to Kubernetes using ArgoCD',
      '• Coordinated a team of 6 members and delivered multiple features under the post-purchase and purchase scopes'
    ], 'assets/images/farfetch-logo.jpg'),
    // Vortal.
    new Experience('Software Engineer', 'VORTAL Connecting Business - Lisbon, Portugal — September 2018 - November 2020', [
      '• Responsible for the releases and production support of an e-tendering product',
      '• Created a scalable client-side application with Angular modules and components',
      '• Developed a .NET Core REST API to receive and provide tender information, with unit testing of all code pushed to production',
      '• Planned each sprint using Azure DevOps as management tool and defined priorities of new features, applying SCRUM methodologies',
      '• Integrated with the Journal of the European Union API to get all public tenders published in the EU',
      '• Implemented CI/CD in Azure Pipelines, which reduced by 30% the deployment time of the application'
    ], 'assets/images/vortal-logo.jpg'),
    // CGI.
    new Experience('Junior Software Engineer', 'CGI - Lisbon, Portugal — August 2017 - August 2018', [
      '• Built a Fintech health and welfare insurance simulation application',
      '• Implemented unit testing using Jasmine and MSTest, and kept approx. 5100 automated unit tests with a code coverage above 90%',
      '• Defined a REST ASP.NET Web API to get and save user data',
      '• Created AngularJS directives to prevent input mistakes in a user interface and structured reusable components for each independent feature',
      '• Designed SOAP web services using WCF to supply user information to external systems'
    ], 'assets/images/cgi-logo.jpg'),

  ];
  constructor() {}

  ngOnInit() {}
}
