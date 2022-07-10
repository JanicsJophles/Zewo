const Discord = require('discord.js');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();
const { MessageEmbed, MessageAttachment } = require('discord.js');
const background = "https://static.zerochan.net/Mugon.full.512988.jpg"
const generateImage = require('./genImage')
const Canvas = require('canvas')


const client = new Discord.Client({intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_INVITES']});


// welcome command!!!!

const welcomeChannelId = "995455054813347952"
//const welcomeRoleChannelID = "994458948335841283"


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
    //description: `Go get some roles at <#${welcomeRoleChannelID}> \n <@${member.id}> be my kitten!!`,
    footer: "Have fun in the server!"
}
     
member.guild.channels.cache.get(welcomeChannelId).send({embeds: [welcomeEmbed], files: [img] });
})

//end of welcome command!!!!




client.login(process.env.TOKEN)
