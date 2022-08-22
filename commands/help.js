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
        .setTitle('Shows all the commands :D')
        .setDescription(`Click the next button to see in depth information about each command.\nClick the back button to go back a page.`)
        .addFields(
            {name: `<a:123egirls:1004192267784953866> Text Commands!!`, value: "`sheen`, `bitches`\n" },
            
            {name: `<a:egirlithink:1004192210671116338> Image Commands!!`, value: "`8ball`, `randomcat`, `define`, `hotdog`, `come`, `poll`, `coinflip`\n"},
            
            {name: `<a:egirlsa:1004192313926484048> Rating Commands!!`, value: "`gayrate`, `funnyrate`, `pp`, `clownrate`, `waifurate`\n"},
            
            {name: `<:emoji_11:1003136058428493854> Interactive Commands ;)`, value: "`slap`, `kiss`, `ship`, `hug`, `meme`, `reddits`, `food`\n"},

            {name: `<:coochieworld:1003132134195736676> Info Commands :D`, value: "`serverinfo`, `avatar`, `memberinfo`"}

        )
        .setColor(randomSideColor)
        .setImage('https://media4.giphy.com/media/RMwgs5kZqkRyhF24KK/200.gif')
        .setTimestamp()
        .setFooter({ text: 'i luv u :D'})
        
        
       
        
       
      
        
        let helpMenu = new ActionRowBuilder()
    .addComponents(
      new SelectMenuBuilder()
      .setCustomId("help_menu")
      .setPlaceholder('Help Menu')
      .setMinValues(1)
      .setMaxValues(1)
      .addOptions([
        {
          label: "Text Commands",
          description: "Looks at all of the Text Commands",
          value: "text",
          emoji: "💬"
        },
        {
          label: "Image Commands",
          description: "Looks at Image commands",
          value: "image",
          emoji: "🎨"
        },
        {
          label: "Rate Commands",
          description: "Looks at all of the rating commands",
          value: "rate",
          emoji: "🎲"
        },
        {
          label: "Interactive Commands",
          description: "Shows all the interactive commands",
          value: "interactive",
          emoji: "🖼"
        },
        {
          label: "Information",
          description: "Shows all the information commands",
          value: "info",
          emoji: "📢"
        },
      ])
    )
  
    await interaction.reply({embeds: [helpEmbed], components: [helpMenu]})

    

    }
    
}