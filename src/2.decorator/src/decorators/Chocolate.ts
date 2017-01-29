import { ExtraIngredient } from "./ExtraIngredient";
import { Drink } from "../base/Drink";

export class Chocolate extends ExtraIngredient {
  private drink: Drink;

  constructor(drink: Drink) {
    super();
    this.drink = drink;
  }

  getDescription(): string {
    return this.drink.getDescription() + ",extra chocolate";
  }

  price(): number {
    return this.drink.price() + 1.00;
  }
}