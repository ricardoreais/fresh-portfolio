export class Experience {
  position: string;
  periodDescription: string;
  achievements: string[];
  companyLogo: string;

  constructor(position: string, periodDescription: string, achievements: string[], companyLogo?: string) {
    this.position = position;
    this.periodDescription = periodDescription;
    this.achievements = achievements;
    this.companyLogo = companyLogo;
  }
}
