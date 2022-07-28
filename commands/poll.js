const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('poll')
    .setDescription('poll command only used by admin')
    .addStringOption(option => option.setName("input").setDescription('put the question in here').setRequired(true)),
    async execute(interaction, client){
        let question = interaction.options.getString('input')
        const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
        const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];
        const embed = new EmbedBuilder()
        .setTitle('A poll')
        .setDescription(`The question was **${question}**\n\nPlease react below!`)
        .setColor(randomSideColor)
        const message = await interaction.reply({embeds: [embed], fetchReply: true})
        message.react('👍')
            .then(() => message.react('👎'))
    }

}