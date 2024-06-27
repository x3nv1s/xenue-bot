const axios = require('axios');

module.exports.config = {
  name: "gender",
  needPrefix: false
};

module.exports.run = function({ xen, event, args }) {
  if (!args) {
    return xen.send('Please provide a name.');
  } else {
    xen.send('Please wait while I’m processing your request...');
  }

  const name = event.body.slice(event.body.indexOf("gender")).trim().split(/\s+/).slice(1).join(" ");
  const apiUrl = `https://api.genderize.io/?name=${encodeURIComponent(name)}`;

  axios.get(apiUrl)
    .then(res => {
      if (res.data.gender) {
        xen.send(`[ 👨‍👩‍👧‍👦 ] : The gender is likely ${res.data.gender}`);
      } else {
        xen.send(`[ ❔ ] : I'm not sure about the gender for this name.`);
      }
    })
    .catch(err => {
      console.error(err); // Log the error for debugging purposes
      xen.send("[ ❌ ] : An error occurred while fetching the API. Please try again later.");
    });
};