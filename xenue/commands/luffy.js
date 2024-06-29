const axios = require('axios');

module.exports.config = {
  name: "luffy",
  needPrefix: false
};

module.exports.run = function({ xen, event, args }) {
  if (!args) {
    return xen.send('Please provide a question to ask Luffy.');
  }

  xen.send('Please wait while I’m processing your request...');

  const question = args.join(" ");
  const apiUrl = `https://joshweb.click/pai/luffy?q=${encodeURIComponent(question)}&uid=1`;

  axios.get(apiUrl)
    .then(res => {
      xen.send(res.data.response);
    })
    .catch(err => {
      console.error(err); 
      xen.send("[ ❌ ] : An error occurred while fetching the API. Please try again later.");
    });
};
