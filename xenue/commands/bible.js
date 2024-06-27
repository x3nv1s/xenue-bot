const axios = require('axios');

module.exports.config = {
  name: "bible",
  needPrefix: false
};

module.exports.run = function({ xen, event, args }) {
  xen.send('Please wait while I’m processing your request...');

  const apiUrl = `https://joshweb.click/bible`;

  axios.get(apiUrl)
    .then(res => {
      xen.send(`[ 📖 ] : ${res.data.verse}`);
    })
    .catch(err => {
      console.error(err); // Log the error for debugging purposes
      xen.send("[ ❌ ] : An error occurred while fetching the API. Please try again later.");
    });
};