module.exports = {
  config: {
    name: "say",
    needPrefix: false
  },
  run: function({xen, event}) {
    const args = event.body.split(/ +/).slice(1);
    const message = args.join(" ");
    if (!message) {
      xen.send("Please provide a message.");
    } else {
      xen.send(message);
    }
  }
};