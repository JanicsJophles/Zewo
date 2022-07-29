const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('milk')
    .setDescription('run the cmd to see what happens!'),
    async execute(interaction){
        const embed = new EmbedBuilder()
        .setTitle('You just got cummed on by Daniel')
        .setImage('https://cdn-prod.medicalnewstoday.com/content/images/articles/296/296564/milk.jpg')
    await interaction.reply({embeds: [embed]})
    }

}