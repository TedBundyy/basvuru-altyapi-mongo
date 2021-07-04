const { MessageEmbed } = require('discord.js');
const config = require('../../setting.json')
const { MessageButton, MessageMenuOption,MessageMenu, MessageActionRow } = require('discord-buttons')
const moment = require('moment')
module.exports = {
    name: 'apply',
    description: 'Post your basvuru',
    async run(client, message, args){
    let accept = new MessageButton()
    .setLabel('✅ Accept')
    .setStyle('green')
    .setID('accept')
    let deny = new MessageButton()
    .setLabel('❌ Deny')
    .setStyle('red')
    .setID('deny')

    let invite = new MessageButton()
    .setLabel('📧 Invite')
    .setStyle('blurple')
    .setID('invite')
    let chat = new MessageButton()
    .setLabel('💬 Chat')
    .setStyle('blurple')
    .setID('chat')
    let voice = new MessageButton()
    .setLabel('🎙 Voice')
    .setStyle('blurple')
    .setID('voice')
    let register = new MessageButton()
    .setLabel('⏺ Register')
    .setStyle('blurple')
    .setID('register')
    let niyukibundy = new MessageEmbed().setTitle(message.member.displayName, message.author.displayAvatarURL).setColor("f6f6f6").setTimestamp().setFooter(`Bu komutu test/trol olarak kullanmayınız çünkü yazdığınız bilgiler bot tarafından entegre edilen kanala gönderilmektedir. Doğru kullanmazsanız gereği yapılır ve cezalandırılırsınız.`);
    let niyukibundy2 = new MessageEmbed().setTitle(message.member.displayName, message.author.displayAvatarURL).setColor("f6f6f6").setTimestamp()
    if (!message.member.roles.cache.has(config.tag.tagrol) && config.tag.needed === true) { 
            message.channel.send(`Tag aldığınızda bot tarafından verilen tag permine sahip olmanız gerekiyor. <@&${config.tag.tagrol}>`).then(x => x.delete({timeout: 7500})); 
    }
    let authroized = message.guild.roles.cache.get(config.basvuru.yetkili)
    let member =  message.member;
    const reactionFilter = (reaction) => {
        return [config.basarili].includes(reaction.emoji.name) && authorized.id;
      }
    let kanal = config.kanallar.basvurukanal;
    if (!kanal.includes(message.channel.id)) { 
        message.react(config.emojiler.carpiemojiekle)
        message.reply(`Komutu sadece <#${config.kanallar.basvurukanal}> bu kanalda kullanabilirsin.`).then(x => x.delete({timeout: 10000})); 
    } else {
try {
    message.author.send(`${message.author}`, {embed: niyukibundy.setDescription(`Merhaba yetkili olmak için ilk önce ismini ve yaşını öğrenebilirmiyim ?`)}).then(async m => {
        message.react(config.emojiler.tikemojiekle);
        message.member.roles.add(config.basvuru.role)
        let awaitMessage = await m.channel.awaitMessages(x => x.author.id == message.author.id, { max: 1, time: 60000 });
        if (!awaitMessage.size) return message.channel.send(`${member} Zamanında cevap vermediğin için başvurun iptal edildi. ${config.emojiler.carpiemoji}`).then(m.delete());
        let niyukibundyxd = awaitMessage.first();
        m.edit(`${message.author}`, {embed: niyukibundy.setDescription(`Sunucuya ne gibi katkılarda bulunabilirsin (/invite/chat/ses/kayıt/)`)}).then(async z => {
            let awaitMessage1 = await z.channel.awaitMessages(x => x.author.id == message.author.id, { max: 1, time: 60000 });
            if (!awaitMessage1.size) return message.channel.send(`${member} Zamanında cevap vermediğin için başvurun iptal edildi.`).then(z.delete());
            let niyukibundy1 = awaitMessage1.first();
            z.edit(`${message.author}`, {embed: niyukibundy.setDescription(`Günde kaç saat aktif olabilirsin ? (chat/ses) `)}).then(async b => {
    
                let awaitMessage31 = await b.channel.awaitMessages(x => x.author.id == message.author.id, { max: 1, time: 60000 });
                if (!awaitMessage31.size) return message.channel.send(`${member} Zamanında cevap vermediğin için başvurun iptal edildi. ${config.emojiler.carpiemoji}`).then(b.delete());
                let niyukibundy31 = awaitMessage31.first();
                b.edit(`${message.author}`, {embed: niyukibundy.setDescription(`Daha önce hangi sunucularda yetkili oldun?`)})
    

                let awaitMessage2 = await b.channel.awaitMessages(x => x.author.id == message.author.id, { max: 1, time: 60000 });
                if (!awaitMessage2.size) return message.channel.send(`${member} Zamanında cevap vermediğin için başvurun iptal edildi. ${config.emojiler.carpiemoji}`).then(b.delete());
                let niyukibundy2 = awaitMessage2.first();
                b.edit(`${message.author}`, {embed: niyukibundy.setTitle(config.emojiler.tikemoji).setDescription(`Sorular başarılı bir şekilde cevaplandı kabul edildiğini/reddedildiğini sana buradan mesaj ile ileteceğim.`)}).then(x => x.delete({timeout: 15000}))
    
                let kanal = message.guild.channels.cache.get(config.kanallar.basvurulog);
                const qwe = await kanal.send(`<@&${config.basvuru.yetkili}> `, {embed: niyukibundy.setFooter('Click on Accept or Deny for the basvuru above').setDescription(`\`•\` Başvuran : ${message.author} - (\`${message.author.id}\`)\n \`•\` Başvuru Zamanı: (\`${moment().locale(config.panel.language)}\`)\n **___Kullanıcının sorulara verdiği cevaplar :___ **\n\`•\` İsmi ve Yaşı : \`${niyukibundyxd.content}\`\n \`•\` Sunucumuza ne tür katkılarınız olabilir?: \`${niyukibundy1.content}\`\n \`•\` Günde kaç saat aktif : \`${niyukibundy31.content}\`\n \`•\` Yetkili olduğu yerler : \`${niyukibundy2.content}\``), buttons: [accept, deny]})
                
                client.on('clickButton', async (button) => {
                    let result = new MessageEmbed()
                        .setFooter('Niyuki x Ted Bundy')
                        .setTimestamp()
                        .setAuthor(message.author.username, message.author.displayAvatarURL)
                    if(button.clicker.member.roles.cache.get(config.basvuru.yetkili) || button.clicker.member.hasPermission(8)) {
                  if (button.id === 'deny') {
                    accept.setDisabled(true)
                    const select1 = new MessageMenuOption()
      .setLabel(`Reason 1`)
      .setDescription(`Sebep 1`)
      .setEmoji(`👶`)
      .setValue(`r1`);

    const select2 = new MessageMenuOption()
      .setLabel(`Reason 2`)
      .setDescription(`Sebep 2`)
      .setEmoji(`👨‍🎓`)
      .setValue(`r2`);

    const select3 = new MessageMenuOption()
      .setLabel(`Reason 3`)
      .setDescription(`Sebep 3`)
      .setEmoji(`⏰`)
      .setValue(`r3`);

    const select4 = new MessageMenuOption()
      .setLabel(`Reason 4`)
      .setDescription(`Sebep 4`)
      .setEmoji(`🤡`)
      .setValue(`r4`);

    const OMG = new MessageMenu()
    .setID(`niyukiispog`)
    .setPlaceholder(`Bir reddetme sebepi seç👻`)
    .addOption(select1)
    .addOption(select2)
    .addOption(select3)
    .addOption(select4)

    const Rowwwww = new MessageActionRow().addComponent(OMG);

    await button.channel.send(`Reddetme için sebep`, {
      components: [Rowwwww],
    });
    client.on('clickMenu', async(menu) => {
      let Reason = ""
        if(menu.clicker.id !== button.clicker.member.id) return
        if(menu.values[0] === 'r1') {
          await menu.reply.defer({ ephemeral: true })
          await menu.channel.send(`Başvuru kabul edilmedi başvuru sahibini bilgilendirdim. Sebep: Sebep1`)
          Reason = "Saat Yetersiz"
        }
      
        if(menu.values[0] === 'r2') {
          await menu.reply.defer({ ephemeral: true })
          await menu.channel.send(`Başvuru kabul edilmedi başvuru sahibini bilgilendirdim. Sebep: Sebep2`)
          Reason = "Not enough experience"
        }
      
        if(menu.values[0] === 'r3') {
          await menu.reply.defer()
          await menu.channel.send(`Başvuru kabul edilmedi başvuru sahibini bilgilendirdim. Sebep: Sebep3`)
          Reason = "Not enough activity"
        }
      
        if(menu.values[0] === 'r4') {
          await menu.reply.defer({ ephemeral: true })
          await menu.channel.send(`Başvuru kabul edilmedi başvuru sahibini bilgilendirdim. Sebep4`)
          Reason = "Troll veya Sahte bilgiler"
        }
        message.author.send(`Başvurun onaylanmadı, sebebini detayli bir şekilde öğrenmek istiyorsan ${button.clicker.member} - \`ID: ${button.clicker.member.id}\` ile iletişime geçerek detaylı bilgi alabilirsin. \`Sebep ${Reason}\` `)
        message.guild.channels.cache.get(config.kanallar.kabulred).send(result.setColor('4a0000').setDescription(`__Başvuru Reddedildi__ \n**Başvurusu Reddedilen Kullanıcı:** ${message.author} - \`${message.author.id}\` \n**Başvuruyu Reddeden Yetkili:** ${button.clicker.member} - \`${button.clicker.member.id}\` \n \`Sebep ${Reason}\` `)).then(x => x.react(config.emojiler.carpiemojiekle))

    })
               } else if (button.id === 'accept') {
                      deny.setDisabled(true)
                    message.member.roles.remove(config.basvuru.role)
                    await button.reply.edit(`Başvuru kabul edildi başvuru sahibini bilgilendirdim.`, {buttons: [invite, chat, register, voice]})
                    message.author.send(`Başvurun onaylandı, ${button.clicker.member} - \`ID: ${button.clicker.member.id}\` ile iletişime geçerek detaylı bilgi alabilirsin.`)
                    message.guild.channels.cache.get(config.kanallar.kabulred).send(result.setColor('53ff00').setDescription(`__Başvuru Kabul Edildi__ \n**Başvurusu Kabul Edilen Kullanıcı:** ${message.author} - \`${message.author.id}\` \n**Başvuruyu Kabul Eden Yetkili:** ${button.clicker.member} - \`${button.clicker.member.id}\``)).then(x => x.react(config.emojiler.tikemojiekle))
                    
                    client.on('clickButton', async (button) => {
                        if (button.id === 'invite') {
                                await message.member.roles.add(config.basvuru.invitestaff)
                                await button.think(true);
                                await button.reply.edit("Başvuru kabul edildi başvuran kullanıcıya invite staff permini verdim." +config.emojiler.tikemoji)
                                message.author.send('Başarılı! İnvite Staff yetkisini sana verdim haydi işinin başına!')
                            }
                            if (button.id === 'chat') {
                                  await message.member.roles.add(config.basvuru.chatstaff)
                                  await button.think(true);
                                  await button.reply.edit("Başvuru kabul edildi başvuran kullanıcıya chat staff permini verdim." +config.emojiler.tikemoji)
                                  message.author.send('Başarılı! Chat Staff yetkisini sana verdim haydi işinin başına!')
                            }
                            if (button.id === 'voice') {
                                  await message.member.roles.add(config.basvuru.voicestaff)
                                  await button.think(true);
                                  await button.reply.edit("Başvuru kabul edildi başvuran kullanıcıya voice staff permini verdim." +config.emojiler.tikemoji)
                                  message.author.send('Başarılı! Voice Staff yetkisini sana verdim haydi işinin başına!')
                            }
                            if (button.id === 'register') {
                                  await message.member.roles.add(config.basvuru.registerstaff)
                                  await button.think(true);
                                  await button.reply.edit("Başvuru kabul edildi başvuran kullanıcıya register staff permini verdim." +config.emojiler.tikemoji)
                                  message.author.send('Başarılı! Register Staff yetkisini sana verdim haydi işinin başına!')
                            }                             process.exit(1)

                    })
                } x.delete({ timeout: 1000*60*60*1 })
                } else {
                    await button.think(true);
                    setTimeout(() => {
                        button.reply.edit("Başvuru yetkilisi permine sahip değilsin, veya başvuran kişi sensin çakal.")
                    }, 3500);
                }
                })
            })
        })
    })
} catch (err) {
    console.error(err);
    message.react(config.emojiler.carpiemojiekle);
}

}}}
