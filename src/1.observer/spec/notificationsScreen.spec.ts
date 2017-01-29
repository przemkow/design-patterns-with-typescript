import { MessagesProvider } from "../src/messagesProvider";
import { NotificationsScreen } from "../src/notificationsScreen";

describe("NotificationsScreen", function() {

  describe("when new instance is created", () => {
    const notificationsScreen: NotificationsScreen = new NotificationsScreen();

    it("should be defined", () => {
      expect(notificationsScreen).toBeDefined();
    });

    it("should have notify method", () => {
      expect(notificationsScreen.notify).toBeDefined();
    });
  });

  describe("when notify method is called", () => {
    const notificationsScreen: NotificationsScreen = new NotificationsScreen();

    it("should console.log message", () => {
      spyOn(console, "log");
      notificationsScreen.notify("mocked text");

      expect(console.log).toHaveBeenCalledWith("You have new notification:\n mocked text");
    });
  });

});