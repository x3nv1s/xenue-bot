const axios = require('axios');

module.exports.config = {
  name: "yi",
  needPrefix: false
};

module.exports.run = function({ xen, event, args }) {
  if (!args) {
    return xen.send('Please provide a question for Yi (e.g., yi How are you doing today?).');
  }

  const question = args;

  xen.send('Please wait while I’m asking Yi...');

  const apiUrl = `https://hiroshi-rest-api.replit.app/ai/yi?ask=${encodeURIComponent(question)}`;

  axios.get(apiUrl)
    .then(res => {
      if (res.status === 200) {
        xen.send(res.data.response);
      } else {
        xen.send('An error occurred while asking Yi. Please try again later.');
      }
    })
    .catch(err => {
      console.error(err); // Log the error for debugging purposes
      xen.send(`[ ❌ ] : An error occurred while asking Yi.`);
    });
};