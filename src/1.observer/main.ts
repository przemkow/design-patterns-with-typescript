import { NotificationsScreen } from "./src/notificationsScreen";
import { MessagesProvider } from "./src/messagesProvider";

void function main () {
  const harrysMessenger: MessagesProvider = new MessagesProvider();
  const harrysNotificationScreen: NotificationsScreen = new NotificationsScreen();

  harrysMessenger.receiveMessage("Hello Harry! How are you?", "+1 781 452 4077");

  harrysMessenger.registerObserver(harrysNotificationScreen);

  harrysMessenger.receiveMessage("Hello Harry! Why you do not answer back?", "+1 781 452 4077");

  harrysMessenger.sendMessage("Hi, I'm busy. I will answer back later.", "+1 781 452 4077");

  harrysMessenger.unregisterObserver(harrysNotificationScreen);

  harrysMessenger.receiveMessage("Ok.", "+1 781 452 4077");

}();