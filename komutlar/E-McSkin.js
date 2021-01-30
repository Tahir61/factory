const Discord = require(`discord.js`);
exports.run = (client, message, args) => {
let mesaj = args.slice(0).join(' ');
let member = message.mentions.members.first();
let body = 'https://mc-heads.net/body/' + mesaj
if (mesaj.length < 1) return message.reply('**Bir `Oyuncu İsmi`  Belirtin**');
if (mesaj == member) {
    message.reply('Kullanıcı Değil, Bir Oyuncu Adı Belirtmelisin')
} else {
const mcbody = new Discord.MessageEmbed()
   .setColor('BLUE')
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(body)
message.channel.send(mcbody);
}
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0,
kategori: "eğlence"
};
exports.help = {
name: 'mcskin',
description: 'Belirtilen oyuncunun kostümünü gösterir.',
usage: 'mcskin <oyuncu>'
};