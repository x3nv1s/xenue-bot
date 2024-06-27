const axios = require('axios');

module.exports.config = {
  name: "joke",
  needPrefix: false
};

module.exports.run = function({ xen, event, args }) {
  xen.send('Please wait while I’m processing your request...');

  const apiUrl = `https://selected-tamiko-joshua132-23ef32c6.koyeb.app/joke`;

  axios.get(apiUrl)
    .then(res => {
      xen.send(`[ 💬 ] : ${res.data.joke}`);
    })
    .catch(err => {
      console.error(err); // Log the error for debugging purposes
      xen.send("[ ❌ ] : An error occurred while fetching the API. Please try again later.");
    });
};