import { Component } from "@angular/core";
import { Author, authors } from "../authors";

@Component({
  selector: "author-list",
  template: `
    <author-details
      *ngFor="let author of authors"
      [author]="author"
      (select)="onSelected($event)"
      (delete)="onDelete($event)"
    ></author-details>
    <div>
      current selector :
      <span style="color: red"
        >{{ currenAuthor?.firstName }} {{ currenAuthor?.lastName }}</span
      >
    </div>
  `
})
export class AuthorListComponent {
  authors = authors;

  currenAuthor = authors[0];

  onSelected(selectedAuthor: Author) {
    this.currenAuthor = selectedAuthor;
  }

  onDelete(id: number) {
    this.authors = this.authors.filter(author => {
      return author.id !== id;
    });

    if (this.currenAuthor.id === id) {
      this.currenAuthor = this.authors[0];
    }
  }
}
