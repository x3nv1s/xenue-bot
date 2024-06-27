const axios = require('axios');

module.exports.config = {
  name: "df",
  needPrefix: false
};

module.exports.run = function({ xen, event, args }) {
  if (!args) {
    return xen.send('Please provide a title and page number.');
  }

  const title = args[0];
  const page = args[1];

  xen.send('Please wait while I’m processing your request...');

  const apiUrl = `https://jonellccprojectapis10.adaptable.app/api/df?title=${encodeURIComponent(title)}&page=${encodeURIComponent(page)}`;

  axios.get(apiUrl)
    .then(res => {
      xen.send(`[ 🤖 ] : ${res.data.response}`);
    })
    .catch(err => {
      console.error(err); // Log the error for debugging purposes
      xen.send("[ ❌ ] : An error occurred while fetching the API. Please try again later.");
    });
};