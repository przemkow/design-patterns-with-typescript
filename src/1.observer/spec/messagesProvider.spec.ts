import { MessagesProvider } from "../src/messagesProvider";
import { NotificationsScreen } from "../src/notificationsScreen";

describe("MessagesProvider", function() {

  describe("when new instance is created", () => {
    const messagesProvider: MessagesProvider = new MessagesProvider();

    it("should be defined", () => {
      expect(messagesProvider).toBeDefined();
    });

    it("should have registerObserver method", () => {
      expect(messagesProvider.registerObserver).toBeDefined();
    });

    it("should have unregisterObserver method", () => {
      expect(messagesProvider.unregisterObserver).toBeDefined();
    });

    it("should have notifyObserver method", () => {
      expect(messagesProvider.notifyObserver).toBeDefined();
    });
  });

  describe("when registerObserver method is called", () => {
    const messagesProvider: MessagesProvider = new MessagesProvider();
    const observer: NotificationsScreen = new NotificationsScreen();
    it("should insert new observer to observers list", () => {
      messagesProvider.registerObserver(observer);
      const numberOfObserversAfterRegister = messagesProvider.observers.length;
      expect(numberOfObserversAfterRegister).toEqual(1);
    });
  });

  describe("when unregisterObserver method is called", () => {
    const messagesProvider: MessagesProvider = new MessagesProvider();
    const observer: NotificationsScreen = new NotificationsScreen();
    messagesProvider.registerObserver(observer);

    it("should delete observer from observers list", () => {
      messagesProvider.unregisterObserver(observer);
      const numberOfObserversAfterInsert = messagesProvider.observers.length;

      expect(numberOfObserversAfterInsert).toEqual(0);
    });
  });

  describe("when notifyObserver method is called", () => {
    const messagesProvider: MessagesProvider = new MessagesProvider();
    const observer1: NotificationsScreen = new NotificationsScreen();
    const observer2: NotificationsScreen = new NotificationsScreen();
    observer1.notify = jasmine.createSpy("notify1");
    observer2.notify = jasmine.createSpy("notify2");
    messagesProvider.registerObserver(observer1);
    messagesProvider.registerObserver(observer2);

    it("should call notify method on every observer", () => {
      messagesProvider.notifyObserver("notify message");

      expect(observer1.notify).toHaveBeenCalledWith("notify message");
      expect(observer2.notify).toHaveBeenCalledWith("notify message");
    });
  });

  describe("when sendMessage method is called", () => {
    const messagesProvider: MessagesProvider = new MessagesProvider();

    it("should console.log message", () => {
      spyOn(console, "log");
      messagesProvider.sendMessage("mocked text", "123");

      expect(console.log).toHaveBeenCalledWith("Message: 'mocked text' has been send to: '123'");
    });
  });

  describe("when receiveMessage method is called", () => {
    const messagesProvider: MessagesProvider = new MessagesProvider();
    messagesProvider.notifyObserver = jasmine.createSpy("notifyObserver");

    it("should call notifyObserver method", () => {
      messagesProvider.receiveMessage("mocked text", "123");

      expect(messagesProvider.notifyObserver)
        .toHaveBeenCalledWith(`You have got new message: 'mocked text' \n from: 123 \n`);
    });
  });
});