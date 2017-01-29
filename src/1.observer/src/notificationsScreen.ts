import { Observer } from "../interfaces/observer.interface";

export class NotificationsScreen implements Observer {
  notify(message: string): void {
    console.log(`You have new notification: \n ${message}`);
  }
}