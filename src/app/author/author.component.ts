import { AuthorsService } from './../authors.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-author',
  template: `
  <h2>{{ authors.length + ' Authors' }}</h2>
  <ul>
    <li *ngFor="let author of authors">
      {{ author }}
    </li>
  </ul>
  `,
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  authors;

  constructor(service : AuthorsService) {
    this.authors = service.getAuthors();
  }
}
