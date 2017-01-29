import {Observer} from "./observer.interface";

export interface Observable {
  registerObserver(observer: Observer): void;
  unregisterObserver(observer: Observer): void;
  notifyObserver(message?: any): void;
}