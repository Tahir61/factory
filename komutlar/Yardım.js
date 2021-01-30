const Discord = require("discord.js");

exports.run = async (client, message) => {
  let prefix = "*";

  const fynxcode = new Discord.MessageEmbed()
    .setAuthor(`FC • Factory Code`)
    .setTitle(``)
    .setColor(`BLUE`)
    .setThumbnail(client.user.avatarURL())
    .setDescription(
      "**<:fc:804090394462912534> = `fc!genel` : Genel Komutlar**\n**<:fc:804090394462912534> = `fc!ayarlar` : **Moderasyon Komutları**\n**<:fc:804090394462912534> = `fc!koruma` : Sunucu Koruma**\n**<:fc:804090394462912534> = `fc!sunucu` : Sunucu Komutları**\n**<:fc:804090394462912534> = `fc!eğlence` : Eğlence Komutları**\n**<:fc:804090394462912534> = `fc!kullanıcı` : Kullanıcı Komutları**\n** <:fc:804090394462912534> = `fc!rol` : RolAlma Komutları**\n**<:fc:804090394462912534> = `fc!logo` : **Logo Generator**"
    )
    .addField(
      "@Factory Code | Gelişimci",
      `  [Botumuza Oy Ver](https://top.gg/bot/713713727794446397)` +
        "**  **" +
        `|  [Botu Davet Et]( https://discord.com/oauth2/authorize?client_id=802189225306488912&scope=bot&permissions=8)` +
        "**  **" +
        `| [Exargon Sunucu](https://discord.gg/vcSNqQUE)  `,
      false
    )
    .setImage(
      "https://media.discordapp.net/attachments/802183266361802775/804438251955159091/proxy_form.png"
    );
  return message.channel.send(fynxcode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};
