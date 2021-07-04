const client = require('../../index');
const config = require('../../setting.json')

client.on('ready', async(message) => {
    //--------------BOT AKTIF OLURSA LOGLAR
    let log = await client.translate(`${client.user.tag} BOT is here!`, message)
    console.log(log)
    console.log('<==============================================>')
    console.log('🔥 Niyuki x Ted Bundy 🔥')
    console.log('<==============================================>')

    //--------SES KANAINA GIRME
    client.channels.cache.get(config.kanallar.seskanali).join()

    //--------BOT STATUSUNU AYARLAR
    client.user.setPresence({ activity: { name: 'Niyuki x Ted Bundy' , type: 'STREAMING', url:'https://github.com/niyuki'}, status: 'dnd'/*online, idle, dnd, invisible */ })
    //.then(console.log)
      .catch(console.error);  
})