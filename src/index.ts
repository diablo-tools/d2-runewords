function printMsg(message?: string): void {
  console.log(`This is a message from the demo package`);

  if (message) {
    console.log("Your message", message);
  }
}
// Support es imports - import { printMsg }
printMsg.printMsg = printMsg;

// Allow default es import - import printMsg
printMsg.default = printMsg;

// commonjs export
exports.printMsg = printMsg;
