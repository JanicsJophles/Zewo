const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('literally a help command'),
    async execute(interaction){
        const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
        const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];
        
        const embed = new EmbedBuilder()
        .setAuthor({name: `Help command for Zewo`})
        .setTitle('Shows all the commands :D')
        .addFields(
            {name: `<a:123egirls:1004192267784953866> Text Commands!!`, value: "`sheen`, `bitches`\n" },
            
            {name: `<a:egirlithink:1004192210671116338> Image Commands!!`, value: "`8ball`, `randomcat`, `define`, `hotdog`, `come`, `poll`, `coinflip`\n"},
            
            {name: `<a:egirlsa:1004192313926484048> Rating Commands!!`, value: "`gayrate`, `funnyrate`, `pp`, `clownrate`, `waifurate`\n"},
            
            {name: `<:emoji_11:1003136058428493854> Interactive Commands ;)`, value: "`slap`, `kiss`, `ship`, `hug`\n"},

            {name: `<:coochieworld:1003132134195736676> Info Commands :D`, value: "`serverinfo`, `avatar`, `memberinfo`"}

        )
        .setColor(randomSideColor)
        .setImage('https://media4.giphy.com/media/RMwgs5kZqkRyhF24KK/200.gif')
        .setTimestamp()
        .setFooter({ text: 'i luv u :D'})

    await interaction.reply({embeds: [embed]})
    }
    
}