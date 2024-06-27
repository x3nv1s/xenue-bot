const axios = require('axios');

module.exports.config = {
  name: "random",
  needPrefix: false
};

module.exports.run = function({ xen, event }) {
  const messages = [
    "Hello there!",
    "How are you doing today?",
    "What's on your mind?",
    "I'm feeling good!",
    "Let's chat!",
    "Have a great day!",
    "Random message generated just for you!",
    "This is a random message from the bot.",
    "Beep boop, I'm a bot!"
  ];

  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];

  xen.send(randomMessage);
};