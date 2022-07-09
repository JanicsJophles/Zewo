const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
    setInterval(() => {
        client.user.setActivity(`${client.guilds.cache.size} Servers`, { type: 'WATCHING' })
    }, 60000); 
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
})


client.login(process.env.TOKEN)