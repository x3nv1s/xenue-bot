const axios = require('axios');

module.exports.config = {
  name: "blackbox",
  needPrefix: false
};

module.exports.run = function({ xen, event, args }) {
  if (!args) {
    return xen.send('Please provide a message.');
  } else {
    xen.send('Please wait while I’m processing your request...');
  }

  const prompt = event.body.slice(event.body.indexOf("blackbox")).trim().split(/\s+/).slice(1).join(" ");
  const apiUrl = `https://jonellccprojectapis10.adaptable.app/api/blackbox?text=${encodeURIComponent(prompt)}`;

  axios.get(apiUrl)
    .then(res => {
      xen.send(`[ 🤖 ] : ${res.data.response}`);
    })
    .catch(err => {
      console.error(err); // Log the error for debugging purposes
      xen.send("[ ❌ ] : An error occurred while fetching the API. Please try again later.");
    });
};