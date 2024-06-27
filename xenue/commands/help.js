module.exports.config = {
  name: "help",
  needPrefix: true
}
module.exports.run = function({xen, event, args}) {
  xen.send(`• ─── [ COMMANDS ] ─── •
╭───⭓ 
│ gpt4
│ usage : ${global.bot.prefix}gpt4 <question>
│ description : Talk to GPT-4 
╰───────────⧕
───────────────────
╭───⭓ 
│ gpt4o
│ usage : ${global.bot.prefix}gpt4o <question>
│ description : Talk to GPT-4o
╰───────────⧕
───────────────────
╭───⭓ 
│ gpt3
│ usage : ${global.bot.prefix}gpt3 <question>
│ description : Talk to GPT-3
╰───────────⧕
───────────────────
╭───⭓ 
│ blackbox
│ usage : ${global.bot.prefix}blackbox <question>
│ description : Talk with Blackbox AI.
╰───────────⧕
───────────────────
╭───⭓ 
│ yi
│ usage : ${global.bot.prefix}yi <message>
│ description : Talk with Yi AI.
╰───────────⧕
───────────────────
» Page 1/3
» Use help<page number> to see more commands.
» This bot is just for educational purposes only, and I am not responsible for any misuse or illegal activities.
» Bot haves 14 commands, stay stunned & also wait for the updates. I’ll add some commands like for entertainment purposes.
» If you have any questions, suggestions, concerns, feel free to contact me at facebook : https://facebook.com/urxxen 
`)
}