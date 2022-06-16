const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = 'z!';

client.on('ready', () => {
    setInterval(() => {
        client.user.setActivity(`${client.guilds.cache.size} Servers | z!`, { type: 'WATCHING' })
    }, 60000); 
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
})

if(command === 'garbage'){
    message.channel.send('fortnite lol');
}

client.login('OTg2ODc3NzExNjA5ODkyODc0.GzXD2B.TEUDi2QjcKasy04NH4VuhVdBjVPmRM4lEUjThA')
