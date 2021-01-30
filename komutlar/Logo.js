const Discord = require("discord.js")

exports.run = async(client, message) => {
	
	let prefix = '*'

	const fynxcode = new Discord.MessageEmbed()
       .setAuthor(`Factory Code • Logo Generator`)
       .setTitle(``)
       .setColor(`BLUE`)
       .setThumbnail(client.user.avatarURL())
       .setDescription("\`alev\` \`alev2\` \`altın\` \`animelogo\` \`arrow\` \`bubbe\` \`cool\` \`dinamik\` \`discordlogo\` \`elmas\`")
       .addField("@Factory Code | Gelişimci", `  [Botumuza Oy Ver](https://top.gg/bot/713713727794446397)` + "**  **" + `|  [Botu Davet Et]( https://discord.com/oauth2/authorize?client_id=802189225306488912&scope=bot&permissions=8)`  + "**  **" + `| [Exargon Sunucu](https://discord.gg/vcSNqQUE)  `, false)
  return message.channel.send(fynxcode)
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'logo',
  description: 'Yardım Menüsü',
  usage: 'yardım'
};