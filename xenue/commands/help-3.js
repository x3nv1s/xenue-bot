module.exports.config = {
  name: "help3",
  needPrefix: true
}
module.exports.run = function ({xen, event, args}) {
  xen.send(`• ─── [ COMMANDS ] ─── •
╭───⭓ 
│ joke
│ usage : ${global.bot.prefix}joke
│ description : No description.
╰───────────⧕
───────────────────
╭───⭓ 
│ bible
│ usage : ${global.bot.prefix}bible
│ description : No description.
╰───────────⧕
───────────────────
╭───⭓ 
│ gender
│ usage : ${global.bot.prefix}gender <name>
│ description : Identify the gender by dropping their name.
╰───────────⧕
───────────────────
╭───⭓ 
│ help
│ usage : ${global.bot.prefix}help
│ description : Get all the commands info
╰───────────⧕
───────────────────
» Page 3/3
» Use help<page number> to see more commands.
» This bot is just for educational purposes only, and I am not responsible for any misuse or illegal activities.
» Bot haves 14 commands, stay stunned & also wait for the updates. I’ll add some commands like for entertainment purposes.
» If you have any questions, suggestions, concerns, feel free to contact me at facebook : https://facebook.com/urxxen
`)
}