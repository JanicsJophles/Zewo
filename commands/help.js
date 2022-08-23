const { SlashCommandBuilder, EmbedBuilder, Embed, ButtonBuilder, ActionRowBuilder, ButtonStyle, MessageComponentInteraction, ComponentType, SelectMenuBuilder } = require('discord.js')
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('literally a help command'),
    async execute(interaction){
        
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
  
    let msg = await interaction.reply({embeds: [helpEmbed], components: [helpMenu]})

     if (interaction.customId === "help_menu") {

        

        if (interaction.values[0] === "text") {

          await interaction.deferUpdate();

          const textCommands = new EmbedBuilder()
          .setTitle('Text Commands :D')
          .setDescription('`sheen` - sends a message called Sheen\n`bitches`- gives you bitches ranging from 0-100')
          .setColor(randomSideColor)
          .setThumbnail('https://gifimage.net/wp-content/uploads/2017/10/hestia-anime-gif-5.gif')
          .setTimestamp()
          .setFooter({text: `Next page is about Image Commands!`})
  

      await msg.edit({ embeds: [textCommands] });

        } else if (interaction.values[0] === "image") {

          await interaction.deferUpdate();

          const imageCmds = new EmbedBuilder()
          .setTitle('Image Commands :D')
          .setDescription("`8ball` - an 8ball lol\n`randomcat` - sends a pic of a random cat :3\n`define` - defines something from urban dictionary\n`hotdog` - sends a pic of a random hotdog\n`come` - uhh\n`poll` - a poll command\n`coinflip` - quite literally a coinflip command\n")
          .setColor(randomSideColor)
          .setThumbnail('https://gifimage.net/wp-content/uploads/2017/10/hestia-anime-gif-5.gif')
          .setTimestamp()
          .setFooter({text: `Next page is about Rating Commands!`})

        await msg.edit({ embeds: [imageCmds] });

        } else if (interaction.values[0] === "rate") {

          await interaction.deferUpdate();

          const ratingCmds = new EmbedBuilder()
          .setTitle('Rating Commands :D')
          .setDescription("`gayrate` - tells you how gay you are\n`funnyrate` - tells you how funny you are\n`pp` - shows pp size omg\n`clownrate` - tells u how much of a clown you are\n`waifurate` - how much of a waifu are you?!\n")
          .setColor(randomSideColor)
          .setThumbnail('https://gifimage.net/wp-content/uploads/2017/10/hestia-anime-gif-5.gif')
          .setTimestamp()
          .setFooter({text: `Next page is about Interactive Commands!`})
  
            await msg.edit({ embeds: [ratingCmds]})

            } else if (interaction.values[0] === "interactive") {

              await interaction.deferUpdate();
 
              const interactiveEmbed = new EmbedBuilder()
              .setTitle('Text Commands :D')
              .setDescription("`slap` - slaps a user\n`kiss` - kisses a user\n`ship` - ships 2 users ;)\n`hug` - hugs a user\n`meme` - sends memes from reddit\n`reddits` - choose a reddit to get a post\n `food` - sends food from r/foodp*rn\n")
              .setColor(randomSideColor)
              .setThumbnail('https://gifimage.net/wp-content/uploads/2017/10/hestia-anime-gif-5.gif')
              .setTimestamp()
              .setFooter({text: `Last page is about Info Commands!`})
      
         await msg.edit({ embeds: [interactiveEmbed] })

        } else if (interaction.values[0] === "info") {

          await interaction.deferUpdate();

          const infoCommands = new EmbedBuilder()
          .setTitle('Text Commands :D')
          .setDescription("`serverinfo` - shows server info\n`avatar` - displays a users avatar\n`memberinfo` - shows guild members info")
          .setColor(randomSideColor)
          .setThumbnail('https://gifimage.net/wp-content/uploads/2017/10/hestia-anime-gif-5.gif')
          .setTimestamp()
          .setFooter({text: `Go back to see the other commands :3`})
  

        await msg.edit({ embeds: [infoCommands] })

        } 
    }

    }
    
}