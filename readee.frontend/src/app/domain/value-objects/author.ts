import { Brand } from "@types";

export type Author = Brand<string, "Author">;

export const Author = {
  from(value: string): Author {
    return value as Author;
  }
};