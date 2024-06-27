const axios = require('axios');

module.exports.config = {
  name: "gemini",
  needPrefix: false
};

module.exports.run = function({ xen, event, args }) {
  if (!args) {
    return xen.send('Please provide a question for Gemini (e.g., gemini What is the meaning of life?).');
  }

  const question = args;

  xen.send('Please wait while I’m asking Gemini...');

  const apiUrl = `https://hiroshi-rest-api.replit.app/ai/gemini?ask=${encodeURIComponent(question)}`;

  axios.get(apiUrl)
    .then(res => {
      if (res.status === 200) {
        xen.send(res.data.response);
      } else {
        xen.send('An error occurred while asking Gemini. Please try again later.');
      }
    })
    .catch(err => {
      console.error(err); // Log the error for debugging purposes
      xen.send(`[ ❌ ] : An error occurred while asking Gemini.`);
    });
};