const client = require('../../index')
const prefix = client.prefix;
const { Collection, MessageEmbed } = require('discord.js');
const Timeout = new Collection();
const ms = require('ms')
const config = require('../../setting.json')

client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if (command) {
        if(command.cooldown) {
            if(Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(await client.translate(`Yavaş moddasın: \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long : true})}\` .`),message)
            command.run(client, message, args)
            Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
            setTimeout(() => {
                Timeout.delete(`${command.name}${message.author.id}`)
            }, command.cooldown)
        } else {
            command.run(client, message, args)
            client.channels.cache.get(config.kanallar.komutlog).send(new MessageEmbed()
                .setTitle(`${await client.translate(`Kullanılan Komut: `, message)} ${command.name}`)
                .setDescription(` ${message.author.tag} ${await client.translate(`Kullanıcısı ${command.name}! Komutunu kullandı kullandığı kanal: ${message.channel.name}`,message)}`)
                .setColor('#fff5ee')
                .setFooter('🔥 Niyuki x Ted Bundy On Fire 🔥'))
        }}
});