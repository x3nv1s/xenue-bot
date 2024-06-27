const logger = require('./xen-utils/index.js')
const fs = require('fs');
const login = require("./fca/index.js")
const crypto = require('crypto');
const path = require('path')
const figlet = require('figlet')

const commands = {};
const noPrefixCommands = [];

function loadCommands() {
  fs.readdirSync('./xenue/commands').filter(file => file.endsWith('.js')).forEach(file => {
    const command = require(`./xenue/commands/${file}`);
    if (command.config.needPrefix === undefined) {
      noPrefixCommands.push(command);
      logger("❲ XENUE ❳ » ERROR | " + file);
    } else {
      commands[command.config.name] = command;
      logger(`❲ XENUE ❳ » ${command.config.name} SUCCESSFULLY LOADED !`);
    }
  });
}

global.bot = JSON.parse(fs.readFileSync('config.json', 'utf8'))
logger("———————————————— « BOT INFO » ————————————————")
logger("                  ")
logger("❲ n ❳ » PREFIX: " + global.bot.prefix)
logger("❲ n ❳ » NAME: " + global.bot.botName)
logger("❲ n ❳ » OWNER UID: " + global.bot.admins)
logger("❲ n ❳ » OWNER: " + global.bot.owner)
logger("")
logger("—————————————————————————————————————————————")
logger("                 BOT COMMANDS")
logger("")
loadCommands()
logger("")
logger("—————————————————————————————————————————————")
logger("                  BOT LOGIN PROCESS")
logger("")
if (!fs.existsSync("xenstate.json")) {
  logger("❲ XENUE ❳ » MISSING APPSTATE.")
}
login({appState: JSON.parse(fs.readFileSync("./xenstate.json"))}, (err, api) => {
  if (err) return logger(err);

  api.listenMqtt((err, event) => {
    if (err) return logger(err);
    if (event.body) {
      logger("❲ LOG ❳ " + event.body + " | " + event.threadID);
      handleCommand(event, api);
    }
  });

  logger("————————————————— « XENUE » —————————————————");
});

function handleCommand(event, api) {
  const message = event.body.trim();

  // Check if the message is a prefixed command
  if (message.startsWith(global.bot.prefix)) {
    const args = message.slice(global.bot.prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = commands[commandName];

    if (command) {
      const xen = {
        send: function(msg) {
          api.sendMessage(msg, event.threadID, event.messageID);
        },
        reply: function(msg) {
          api.sendMessage(msg, event.messageID);
        }
      };
      if (command.config.needPrefix === true) {
        try {
        command.run({xen, event, args});
      } catch (error) {
        logger(`⌞ 𝙴𝚁𝚁𝙾𝚁 ⌝ » Error executing command ${commandName}: ${error.message}`);
      }
      return;
      }
      if (command.config.needPrefix === false) {
        try {
        command.run({xen, event, args});
      } catch (error) {
        logger(`⌞ 𝙴𝚁𝚁𝙾𝚁 ⌝ » Error executing command ${commandName}: ${error.message}`);
      }
      return;
      }
    }
  }

  // Check if the message matches any non-prefixed commands
  for (const command of noPrefixCommands) {
    if (message.toLowerCase().startsWith(command.config.name.toLowerCase())) {
      const args = message.split(/ +/).slice(1); // Get the arguments of the command name
      const xen = {
        send: function(msg) {
          api.sendMessage(msg, event.threadID, event.messageID);
        },
        reply: function(msg) {
          api.sendMessage(msg, event.messageID);
        }
      };

      try {
        command.run({xen, event, args});
      } catch (error) {
        logger(`⌞ 𝙴𝚁𝚁𝙾𝚁 ⌝ » Error executing command ${command.config.name}: ${error.message}`);
      }
      return;
    }
  }
  // If the message is not a command, check if it is a direct message
  if (event.threadID === global.bot.userID) {
    // Handle direct messages
    // ...
  }
}
