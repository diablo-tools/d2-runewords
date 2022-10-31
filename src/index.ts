export function printMsg(message?: string): void {
  console.log(`This is a message from the demo package`);

  if (message) {
    console.log("Your message", message);
  }
}
