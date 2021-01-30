const dc = require("discord.js");

exports.run = async (client, message, args) => {
  message.member.roles.add("803966553867026433")
  message.channel.send("<a:tamirset:804453075565412372> • **Başarıyla `Normal Kod` Rölünü Aldınız**")
  message.react("✅")
}
exports.conf = {
  enabled: true,
  guildonly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "normalkod"
}