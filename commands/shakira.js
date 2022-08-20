const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const request = require('node-superfetch')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('shakira')
    .setDescription('sals cat'),
    async execute(interaction){
        const { body } = await request.get(`https://sheetdb.io/api/v1/vwdkzfb10h7z4`)
        const images = body[Math.floor(Math.random() * body.length)].url
        const embed = new EmbedBuilder()
        .setTitle('wow its shakira')
        .setImage(images)
        await interaction.reply({embeds: [embed]})
        console.log(images)
    }
}

