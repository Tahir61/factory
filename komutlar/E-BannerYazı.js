const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  let txt = args.join('+');
  if(!args[0]) return message.channel.send("Lütfen yazı yazın!");
  
  let embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setAuthor("Banner!")
  .setImage("https://dummyimage.com/2000x500/33363c/ffffff&text=" + txt)
  .setFooter("Banner Oluşturuldu!");
  
  message.channel.send(embed);
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banneryazı","banner","banneryaz"],
  permLevel: 0
};

module.exports.help = {
  name: 'yazıbanner',
  description: 'Yazdığınız yazıyı members.banner olarak atar',
  usage: 'yazıb <yazdırmak istediğiniz yazı>'
};