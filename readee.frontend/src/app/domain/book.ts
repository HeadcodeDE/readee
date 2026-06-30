import { Language } from "./language";
import { Author } from "./value-objects/author";
import { BookTitle } from "./value-objects/book-title";
import { Rating } from "./value-objects/rating";

export class Book {
  authors: Author[] = [];
  title: BookTitle;
  rating: Rating = Rating.default();
  language: Language = Language.EN;
  isFiction: boolean = true;
  constructor(title: BookTitle) {
    this.title = title;
  }

}