const Discord = require('discord.js');
const config = require('../config.json');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let help = new Discord.MessageEmbed()
      .setAuthor("Big Chungus")
      .setTitle("**__Command List & Guide for the Bot__**")
      .setDescription("***Below are Commands you can do with Bot, Right now there is only 6 commands available, more commands will be added soon.***")
      .addField("🎁 Giveaway 🎁","**start [channel-name] [Time] [winners] [Prize]\nreroll [prize name]\nend [prize name]***")
      .addField("Examples", "**g!start #giveaway 5m 1 Testing\ng!end Testing\ng!reroll Testing**")
      .addField("Utility", "**ping, invite**", true)
      .addField("ℹ Information ℹ", "**stats**", true)
      .addField("***Check out***", "[Discord](https://discord.gg/twitchfollower)*** Support server***")
      .setTimestamp()
       .setFooter(`Command Requested By ${message.author.tag}`, client.user.displayAvatarURL());
    
    message.channel.send("**Sent the commands in Direct Messages! 💌, Check DMs**");

    return message.author.send(help);
}

module.exports.help = {
  name: "help"
}
