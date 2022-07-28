const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')

var  randomNumbers = [];
        for (var i = 1; i <= 100; i++) {
    randomNumbers.push(i);
        }

module.exports = {
    data: new SlashCommandBuilder()
    .setName('funnyrate')
    .setDescription('tells u how funny u r')
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
    .setTitle('how funny r u')
    .setDescription(`${answer || you} ${link} **${randomNumber}%** funny :laugh:`)
    .setColor(randomSideColor)
        await interaction.reply({embeds: [embed]})
    }
}





