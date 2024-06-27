const axios = require('axios');

module.exports.config = {
  name: "gpt4",
  needPrefix: false
};

module.exports.run = function({ xen, event, args }) {
  if (!args) {
    return xen.send('Please provide a message.');
  } else {
    xen.send('Please wait while I’m processing your request...');
  }

  const prompt = event.body.slice(event.body.indexOf("gpt4")).trim().split(/\s+/).slice(1).join(" ");
  const apiUrl = `https://markdevs-last-api.onrender.com/gpt4?prompt=${encodeURIComponent(prompt)}&uid=20093`;

  axios.get(apiUrl)
    .then(res => {
      xen.send("[ 🤖 ] : " + res.data.gpt4);
    })
    .catch(err => {
      console.error(err); // Log the error for debugging purposes
      xen.send("[ ❌ ] : An error occurred while fetching the API. Please try again later.");
    });
};