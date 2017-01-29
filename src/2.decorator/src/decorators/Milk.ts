import { ExtraIngredient } from "./ExtraIngredient";
import { Drink } from "../base/Drink";

export class Milk extends ExtraIngredient {
  private drink: Drink;

  constructor(drink: Drink) {
    super();
    this.drink = drink;
  }

  getDescription(): string {
    return this.drink.getDescription() + ",extra milk";
  }

  price(): number {
    return this.drink.price() + 0.50;
  }
}