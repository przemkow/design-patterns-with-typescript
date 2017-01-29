import { Drink } from "./Drink";

export class Espresso extends Drink {
  constructor() {
    super();
    this.description = "Espresso";
  }

  price() {
    return 1.99;
  }
}