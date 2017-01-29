import { Drink } from "../base/Drink";

export abstract class ExtraIngredient extends Drink {
  abstract getDescription(): string;
}