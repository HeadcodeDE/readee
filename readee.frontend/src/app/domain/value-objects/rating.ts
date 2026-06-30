import { Brand } from "@types";

export type Rating = Brand<number, "Rating">;

export const Rating = {
  from(value: number): Rating {
    if (value < 0 || value > 5) {
      throw new Error("Rating must be between 0 and 5");
    }
    return value as Rating;
  },
  default(): Rating {
    return Rating.from(0);
  }
};