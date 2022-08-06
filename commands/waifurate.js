const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')

var  randomNumbers = [];
        for (var i = 1; i <= 100; i++) {
    randomNumbers.push(i);
        }

module.exports = {
    data: new SlashCommandBuilder()
    .setName('waifurate')
    .setDescription('tells u how much of a waifu u r')
    .addStringOption(option => option.setName('input').setDescription('You can put any user in here, or text').setRequired(false)),
    async execute(interaction, member){
    const answer = interaction.options.getString('input')
    const you = 'You'
    let link = 'is'
    const linktwo = 'are'
    if(!answer){
        link = linktwo
    }
    const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
    const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];
    var emoji = ':flushed:'
        const randomNumber = randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
        if(randomNumber >= 1 && randomNumber <= 20){
            emoji = ':smiley:'
        }   if(randomNumber >= 21 && randomNumber <= 40){
            emoji = ':astonished:'
        }   if(randomNumber >= 41 && randomNumber <= 60){
            emoji = ':smirk:'
        }if(randomNumber >= 61 && randomNumber <= 80){
            emoji = ':hot_face:'
        }if(randomNumber >= 81 && randomNumber <= 100){
            emoji = ':anguished:'
        }
    const embed = new EmbedBuilder()
    .setTitle('how much of a waifu r u')
    .setDescription(`${answer || you} ${link} **${randomNumber}%** a waifu ${emoji}`)
    .setColor(randomSideColor)
        await interaction.reply({embeds: [embed]})
    }
}















