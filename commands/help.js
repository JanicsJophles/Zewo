const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('literally a help command'),
    async execute(interaction){
        const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
        const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];
        const emojiOne = interaction.guild.emojis.cache.find(emoji => emoji.name === '123egirls');
        const emojiTwo = interaction.guild.emojis.cache.find(emoji => emoji.name === 'egirlithink');
        const emojiThree = interaction.guild.emojis.cache.find(emoji => emoji.name === 'egirlsa');
        const emojiFour = interaction.guild.emojis.cache.find(emoji => emoji.name === 'emoji_11');
        const emojiFive = interaction.guild.emojis.cache.find(emoji => emoji.name === 'coochieworld');
        const embed = new EmbedBuilder()
        .setAuthor({name: `Help command for Zewo`})
        .setTitle('Shows all the commands :D')
        .addFields(
            {name: `${emojiOne} Text Commands!!`, value: "`sheen`, `bitches`\n" },
            
            {name: `${emojiTwo} Image Commands!!`, value: "`8ball`, `randomcat`, `define`, `hotdog`, `come`, `poll`, `coinflip`\n"},
            
            {name: `${emojiThree} Rating Commands!!`, value: "`gayrate`, `funnyrate`, `pp`, `clownrate`, `waifurate`\n"},
            
            {name: `${emojiFour} Interactive Commands ;)`, value: "`slap`, `kiss`, `ship`, `hug`\n"},

            {name: `${emojiFive} Info Commands :D`, value: "`serverinfo`, `avatar`"}

        )
        .setColor(randomSideColor)
        .setImage('https://media4.giphy.com/media/RMwgs5kZqkRyhF24KK/200.gif')
        .setTimestamp()
        .setFooter({ text: 'Bot going public TODAY!! :D'})

    await interaction.reply({embeds: [embed]})
    }
    
}