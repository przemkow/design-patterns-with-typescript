import { MessagesProvider } from "../src/messagesProvider";

describe("MessagesProvider spec", function() {

  const messagesProvider: MessagesProvider = new MessagesProvider();

  it("messagesProvider should be defined", () => {
    expect(messagesProvider).toBeDefined();
  });

});