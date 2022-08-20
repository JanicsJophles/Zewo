const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const request = require('node-superfetch')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('randomwaifu')
    .setDescription('sends u a random waifu ;3'),
    async execute(interaction){
        const { body } = await request.get(`https://sheetdb.io/api/v1/1dcgtmq0pykf9`)
        const index = Math.floor(Math.random() * body.length)
        const url = body[index].url
        const name = body[index].name
        
        const embed = new EmbedBuilder()
        .setTitle(`${name}`)
        .setImage(url)
        await interaction.reply({embeds: [embed]})
    }
}