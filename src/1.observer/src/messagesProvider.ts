import { Observable } from "../interfaces/observable.interface";
import { Observer } from "../interfaces/observer.interface";

export class MessagesProvider implements Observable {
  private observers: Array<Observer>;

  constructor() {
    this.observers = [];
  }

  // ----------------------------------------------
  // Implementation of Observable design pattern:
  // ----------------------------------------------
  registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  unregisterObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer, 0);
    if (index > -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObserver(message: string): void {
    this.observers.forEach((observer: Observer) => observer.notify( message ));
  }
  // ----------------------------------------------
  // End of implementation
  // ----------------------------------------------

  sendMessage(message: string, receiverTelNumber: string): void {
    console.log(`Message: '${message}' has been send to: '${receiverTelNumber}'`);
  }

  receiveMessage(message: string, senderTelNumber: string): void {
    this.notifyObserver(`You have got new message: '${message}' \n from: ${senderTelNumber} \n`);
  }
}