const axios = require('axios');

module.exports = {
  config: {
    name: "dictionary",
    needPrefix: false
  },
  run: function({xen, event}) {
    const args = event.body.split(/ +/).slice(1);
    const query = args.join(" ");
    if (!query) {
      xen.send("Please provide a word to search for.")
    } else {
      axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + query)
      .then(response => {
        if (response.data[0].meanings[0].definitions[0].definition) {
          xen.send(response.data[0].meanings[0].definitions[0].definition)
        } else {
          xen.send("No definition found.")
        }
      })
    }
  }
};