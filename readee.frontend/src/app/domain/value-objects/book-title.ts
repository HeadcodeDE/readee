import { Brand } from "@types";

export type BookTitle = Brand<string, "BookTitle">;

const BookTitle = {
  from(value: string): BookTitle {
    return value as BookTitle;
  }
};
