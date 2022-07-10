const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('node:fs');
require('dotenv').config();
const { MessageEmbed, MessageAttachment } = require('discord.js');
const background = "https://static.zerochan.net/Mugon.full.512988.jpg"
const generateImage = require('./genImage')
const Canvas = require('canvas')
const { channel } = require('node:diagnostics_channel');
const client = new Discord.Client({intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_INVITES']});

const commands = [];
const commandFiles = fs.readdirSync('./cmds').filter(file => file.endsWith('.js'));

const guildid = 994458947719282738
const clientid = 986877711609892874


for (const file of commandFiles) {
	const command = require(`./cmds/${file}`);
	commands.push(command.data.toJSON());
}




client.on('ready', () => {
    setInterval(() => {
        client.user.setActivity(`${client.guilds.cache.size} Servers`, { type: 'WATCHING' })
    }, 60000); 
    console.log('bot is on!')
});

const welcomeChannelId = "994458948335841287"
const roleChannelID = "994458948335841283"


client.on("guildMemberAdd", async (member) => {
const img = await generateImage(member)
const welcomeEmbed = {
    color: "BLURPLE",
    title: "Welcome To the Better Egirl Paradise Server",
    url: "https://top.gg/servers/994458947719282738/vote",
    thumbnail: {
        url: "https://www.icegif.com/wp-content/uploads/2022/01/icegif-547.gif"
    },
    image: {
        url: 'attachment://welcome.png'
    },
    description: `Go get some roles at <#${roleChannelID}> \n <@${member.id}> be my kitten!!`,
    footer: "Have fun in the server!"
}
     
member.guild.channels.cache.get(welcomeChannelId).send({embeds: [welcomeEmbed], files: [img] });
})




client.login(process.env.TOKEN)
