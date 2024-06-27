module.exports.config = {
  name: "help2",
  needPrefix: true
}
module.exports.run = function({xen, event, args}) {
  xen.send(`• ─── [ COMMANDS ] ─── •
╭───⭓ 
│ hiro
│ usage : ${global.bot.prefix}hiro <message>
│ description : Talk with Hiro AI.
╰───────────⧕
───────────────────
╭───⭓ 
│ gemini
│ usage : ${global.bot.prefix}gemini <message>
│ description : Talk with Gemini AI.
╰───────────⧕
───────────────────
╭───⭓ 
│ dictionary
│ usage : ${global.bot.prefix}dictionary <word>
│ description : Get the meaning of the word.
╰───────────⧕
───────────────────
╭───⭓ 
│ say
│ usage : ${global.bot.prefix}say <word>
│ description : No description.
╰───────────⧕
───────────────────
╭───⭓ 
│ fact
│ usage : ${global.bot.prefix}fact
│ description : No description.
╰───────────⧕
───────────────────
» Page 2/3
» Use help<page number> to see more commands.
» This bot is just for educational purposes only, and I am not responsible for any misuse or illegal activities.
» Bot haves 14 commands, stay stunned & also wait for the updates. I’ll add some commands like for entertainment purposes.
» If you have any questions, suggestions, concerns, feel free to contact me at facebook : https://facebook.com/urxxen
`)
}