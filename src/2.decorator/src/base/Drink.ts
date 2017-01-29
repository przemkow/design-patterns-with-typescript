export abstract class Drink {
  description: string = "Unknown drink";

  getDescription(): string {
    return this.description;
  }

  abstract price(): number;
}