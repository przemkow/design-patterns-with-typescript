import { Espresso } from "./src/base/Espresso";
import { Milk } from "./src/decorators/Milk";
import { Chocolate } from "./src/decorators/Chocolate";

void function main () {
  const espresso: Espresso = new Espresso();
  const espressoWithMilk: Espresso = new Milk(espresso);
  const espressoWithChocolate: Espresso = new Chocolate(espresso);
  const espressoWithMilkAndChocolate: Espresso = new Chocolate(new Milk(new Espresso));

  console.log(`${espresso.getDescription()}: ${espresso.price()}`);
  console.log(`${espressoWithMilk.getDescription()}: ${espressoWithMilk.price()}`);
  console.log(`${espressoWithChocolate.getDescription()}: ${espressoWithChocolate.price()}`);
  console.log(`${espressoWithMilkAndChocolate.getDescription()}: ${espressoWithMilkAndChocolate.price()}`);
}();