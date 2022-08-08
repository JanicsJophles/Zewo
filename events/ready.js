const { Users, CurrencyShop } = require('../dbObjects.js')
const {ActivityType} = require('discord.js')
module.exports = {
    name: 'ready',
    once: 'true',
   async execute(client){
        client.user.setActivity({
            name: `${client.guilds.cache.size} servers`,
            type: ActivityType.Streaming,
            url: "https://www.twitch.tv/krishanatoryt"
        })
    
        
        console.log(`Logged in as ${client.user.tag}! There are ${client.guilds.cache.size} servers`);
    }

}
