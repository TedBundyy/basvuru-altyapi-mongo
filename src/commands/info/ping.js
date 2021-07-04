const { MessageEmbed } = require('discord.js')
const config = require('../../setting.json')
const pm = require('pretty-ms');


module.exports = {
  name: 'ping',
  aliases: [],
  category: ['Bilgi'],
  utilisation: '{prefix}ping',
  description: 'Botun pingini gönderir.',


  async run(client, message, args) {

   const msg = await message.channel.send("🏓 Pingi ölçüyorum..",message);

    const botLatency = pm(msg.createdTimestamp - message.createdTimestamp)
    const shardLatency = pm(message.guild.shard.ping);
    
    const embed = new MessageEmbed()
      .setAuthor('🏓Pong!')
      .addFields({
          name: await client.translate('Mesaj Gecikmesi:', message),
          value: `${botLatency}`,
          inline: true
        }, {
          name: `Shard ${` | ${message.guild.shard.id} Gecikme`}`,
          value: `${shardLatency}`,
          inline: true
        })

    await msg.edit(embed)
  }
}