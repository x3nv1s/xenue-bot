const axios = require('axios');

module.exports.config = {
  name: "gpt4o",
  needPrefix: false
};

module.exports.run = function({ xen, event, args }) {
  if (!args) {
    return xen.send('Please provide a context.');
  }

  xen.send('Please wait while I’m processing your request...');

  const context = event.body.slice(event.body.indexOf("gpt4o")).trim().split(/\s+/).slice(1).join(" ");
  const apiUrl = `https://jonellccprojectapis10.adaptable.app/api/gpt4o?context=${encodeURIComponent(context)}`;

  axios.get(apiUrl)
    .then(res => {
      xen.send(res.data.response);
    })
    .catch(err => {
      console.error(err); 
      xen.send("[ ❌ ] : An error occurred while fetching the API. Please try again later.");
    });
};