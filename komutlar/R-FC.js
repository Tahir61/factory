const dc = require("discord.js");

exports.run = async (client, message, args) => {
  message.member.roles.add("804454052812423188")
  message.channel.send("<:fc:804090394462912534> • **Başarıyla `𝐹𝒞` Rölünü Aldınız**")
  message.react("✅")
}
exports.conf = {
  enabled: true,
  guildonly: true,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "fc"
}