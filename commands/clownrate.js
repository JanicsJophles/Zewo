const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')

var  randomNumbers = [];
        for (var i = 1; i <= 100; i++) {
    randomNumbers.push(i);
        }

module.exports = {
    data: new SlashCommandBuilder()
    .setName('clownrate')
    .setDescription('tells u how much of a clown u r')
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
    const randomNumber = randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
    const embed = new EmbedBuilder()
    .setTitle('how much of a clown r u')
    .setDescription(`${answer || you} ${link} **${randomNumber}%** a clown :clown:`)
    .setColor(randomSideColor)
        await interaction.reply({embeds: [embed]})
    }
}





