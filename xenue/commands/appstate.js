const axios = require('axios');

module.exports.config = {
  name: "appstate",
  needPrefix: false
};

module.exports.run = function({ xen, event, args }) {
  if (!args) {
    return xen.send('Please provide an email and password.');
  }

  const email = args[0];
  const password = args[1];

  xen.send('Please wait while I’m processing your request...');

  const apiUrl = `https://nash-rest-api.replit.app/app-state?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;

  axios.get(apiUrl)
    .then(res => {
      if (res.data.success) {
        xen.send(`[ ✅ ] : Login successful!`);
      } else {
        xen.send(`[ ❌ ] : Invalid credentials.`);
      }
    })
    .catch(err => {
      console.error(err); // Log the error for debugging purposes
      xen.send("[ ❌ ] : An error occurred while fetching the API. Please try again later.");
    });
};