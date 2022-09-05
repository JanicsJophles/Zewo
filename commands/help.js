const { SlashCommandBuilder, EmbedBuilder, Embed, ButtonBuilder, ActionRowBuilder, ButtonStyle, MessageComponentInteraction, ComponentType, SelectMenuBuilder } = require('discord.js')
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('literally a help command'),
    async execute(interaction){
        

    const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
    const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];
    
    let helpEmbed = new EmbedBuilder()
    .setAuthor({name: `Help command for Zewo`})
    .setDescription(`Slash Command Descriptions are all self explanatory. Prefix Commands will appear here in the near future.`)
    .setColor(randomSideColor)
    .setImage('https://media4.giphy.com/media/RMwgs5kZqkRyhF24KK/200.gif')
    .setTimestamp()
    .setFooter({ text: 'i luv u :D'})
  
    await interaction.reply({embeds: [helpEmbed]})

     
    

    }
    
}