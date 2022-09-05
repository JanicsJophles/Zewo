const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const request = require('node-superfetch')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('fortnitestats')
    .setDescription('Sends fortnite stats for a user.')
    .addStringOption(option => option.setName('accountid').setDescription('put the account ID here').setRequired(true)),
    async execute(interaction, client){
        const epic = interaction.options.getString('accountid')
        //const { body } = await request.get(`https://api.fortnitetracker.com/v1/profile/${platform}/${epic}`, {headers: { 'TRN-Api-Key': `${process.env.TRNkey}` }})
        const { body } = await request.get(`https://fortnite-api.com/v2/stats/br/v2/${epic}`, {headers: { 'Authorization' : `${process.env.FortniteAPI}`}})
        fortniteStats = body.data.stats.all.overall
        const fortniteEmbed = new EmbedBuilder()
        .setTitle(`${body.data.account.name}'s Fortnite stats`)
        .addFields(
            {name: 'Score', value: `${fortniteStats.score}`, inline: true},
            {name: 'Wins', value: `${fortniteStats.wins}`, inline: true},
            {name: 'Kills', value: `${fortniteStats.kills}`, inline: true},
            {name: 'Deaths', value: `${fortniteStats.deaths}`, inline: true},
            {name: 'KD', value: `${fortniteStats.kd}`, inline: true},
            {name: 'Matches', value: `${fortniteStats.matches}`, inline: true},
            {name: 'Winrate', value: `${fortniteStats.winRate}`, inline: true},
            {name: 'Minutes Played', value: `${fortniteStats.minutesPlayed}`, inline: true},
            {name: 'Last Updated', value: `${fortniteStats.lastModified}`, inline: true},
        )
        .setColor('Random')
        await interaction.reply({embeds: [fortniteEmbed]})
    }
}