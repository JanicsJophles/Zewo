const { Users, CurrencyShop } = require('../dbObjects.js')
const {ActivityType} = require('discord.js')
module.exports = {
    name: 'ready',
    once: 'true',
   async execute(client){
        client.user.setActivity({
            name: "Someone be mine",
            type: ActivityType.Streaming,
            url: "https://www.twitch.tv/krishanatoryt"
        })
    
        
        console.log(`Logged in as ${client.user.tag}! There are ${client.guilds.cache.size} servers`);
    }

}
