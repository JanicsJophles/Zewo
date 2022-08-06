const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('coinflip')
    .setDescription('Heads or tails!!'),
    async execute(interaction){
        const headsImg = 'https://images-ext-2.discordapp.net/external/vT5KzRiPIpuQBBYRf7t3Sg02YzgxRaKVt4Aap6l_TJc/%3Fsize%3D128%26quality%3Dlossless/https/cdn.discordapp.com/emojis/938572142524661760.webp'
        const tailsImg = 'https://cdn.discordapp.com/emojis/938572111411306496.webp?size=128&quality=lossless'
        let response = 'none'
        const headsResponse = 'heads!'
        const tailsResponse = 'tails!'
        const randomCoins = [headsImg, tailsImg]
        const randomCoin = randomCoins[Math.floor(Math.random() * randomCoins.length)];
        const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
        const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];
        if(randomCoin == headsImg){
            response = headsResponse
        } else {
            response = tailsResponse
        }

        const embed = new EmbedBuilder()
        .setTitle('Heads or Tails?')
        .setImage(randomCoin)
        .setDescription(`You got ${response}`)
        .setColor(randomSideColor)
        await interaction.reply({embeds: [embed]})

       
        
    }

}