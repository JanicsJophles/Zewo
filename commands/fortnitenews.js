const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const request = require('node-superfetch')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('fortnitenews')
    .setDescription('tells you the latest news from Fortnite'),
    async execute(interaction, client){
        
        const { body } = await request.get('https://fortnite-api.com/v2/news', {headers: { 'Authorization' : `${process.env.FortniteAPI}`}})
        const brNews = body.data.br?.motds
        const stwNews = body.data.stw?.messages
        const creativeNews = body.data.creative?.motds
        const fortniteNewsEmbed = new EmbedBuilder()
        .setTitle('Fortnite News!!')
        .setDescription('Note: News may be old. Dont worry! The API will update.')
        .setColor("Random")
        .addFields(
            {name: "BR News", value: `${brNews[0]?.body} ${brNews[1]?.body} ${brNews[2]?.body} ${brNews[3]?.body}`},
            {name: "STW News", value: `${stwNews[0]?.body} ${stwNews[1]?.body} ${stwNews[2]?.body}`}
        )
        .setImage(body.data.br.image)
        await interaction.reply({embeds: [fortniteNewsEmbed]})
    }
}