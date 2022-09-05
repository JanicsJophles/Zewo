const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const request = require('node-superfetch')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('fortniteshop')
    .setDescription('Shows you the daily fortnite shop'),
    async execute(interaction){
        const { body } = await request.get(`https://fortnite-api.com/v2/shop/br`, {headers: { 'Authorization' : `${process.env.FortniteAPI}`}})
        const dailyShop = body.data

        const shopEmbed = new EmbedBuilder()
        .setTitle('Fortnite Daily Item Shop')
        .setDescription(`This is the shop for ${dailyShop.date}`)
        .setThumbnail(dailyShop.vbuckIcon)
        .addFields(
            {name: `First Skin`, value: `${dailyShop.daily.entries[0].items[0].name}`, inline: true},
            {name: `Second Skin`, value: `${dailyShop.daily.entries[1].items[0].name}`, inline: true},
            {name: `${dailyShop.daily.entries[2].items[0].type.displayValue}`, value: `${dailyShop.daily.entries[2].items[0].name}`, inline: true},
            {name: `${dailyShop.daily.entries[3].items[0].type.displayValue}`, value: `${dailyShop.daily.entries[3].items[0].name}`, inline: true},
            {name: `${dailyShop.daily.entries[4].items[0].type.displayValue}`, value: `${dailyShop.daily.entries[4].items[0].name}`, inline: true},
            {name: `${dailyShop.daily.entries[5].items[0].type.displayValue}`, value: `${dailyShop.daily.entries[5].items[0].name}`, inline: true},
        )
        .setColor("Random")

        await interaction.reply({embeds: [shopEmbed]})
    }
    
}