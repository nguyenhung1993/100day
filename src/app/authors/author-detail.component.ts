import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Author } from "../authors";

@Component({
  selector: "author-details",
  template: `
    <div>
      {{ author.firstName }} {{ author.lastName }}
      <button
        style="background: black; color:#fff; border:0; padding: 10px"
        (click)="select.emit(author)"
      >
        Select
      </button>
      <button
        style="background: red; color:#fff; border:0; padding: 10px"
        (click)="delete.emit(author.id)"
      >
        Delete
      </button>
    </div>

    <br />
  `
})
export class AuthorDetailComponent {
  @Input() author: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
}
