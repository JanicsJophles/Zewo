const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('node:fs');
require('dotenv').config();
const { MessageEmbed } = require('discord.js');
const generateImage = require("./genImage");
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
});

const welcomeChannelId = "994458948335841287"
const roleChannelID = "994458948335841283"

client.on("guildMemberAdd", async (member) => {
const img = await generateImage(member)
const welcomeEmbed = new MessageEmbed()
    .setColor('BLURPLE')
    .setTitle('**Welcome to the Better Egirl Paradise Discord Server**')
    .setURL('https://top.gg/servers/994458947719282738/vote')
    .setDescription(`Go get some roles at <#${roleChannelID}> \n <@${member.id}> be my kitten`)
    .setThumbnail('https://www.icegif.com/wp-content/uploads/2022/01/icegif-547.gif')
    .setImage('img');
member.guild.channels.cache.get(welcomeChannelId).send({
    embeds: [welcomeEmbed], files: [img]
})
})



client.login(process.env.TOKEN)