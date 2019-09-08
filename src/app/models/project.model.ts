export class Project {
  name: string;
  description: string;
  imagePath: string;
  url: string;

  constructor(name: string, description: string, imagePath: string, url?: string) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.url = url;
  }
}
