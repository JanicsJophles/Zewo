const {SlashCommandBuilder, EmbedBuilder, Embed} = require('discord.js')
const request = require('node-superfetch')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('csgo')
    .setDescription('Shows you csgo stats for a player.')
    .addStringOption(option => option.setName('user').setDescription('put the STEAM ID here').setRequired(true)),
    async execute(interaction, client){
        const userNameIg = interaction.options.getString('user')
        const { body } = await request.get(`https://public-api.tracker.gg/v2/csgo/standard/profile/steam/${userNameIg}`, {headers: { 'TRN-Api-Key': `${process.env.TRNkey}` }})
        const csgo = body.data
        const csgoStats = csgo.segments[0].stats
        const csgoPlayerStatsEmbed = new EmbedBuilder()
        .setTitle(`${csgo.platformInfo.platformUserHandle}'s csgo Stats`)
        .setThumbnail(csgo.platformInfo.avatarUrl)
        .setDescription('Note: some stats may be incorrect.')
        .addFields(
            {name: `Time Played`, value: csgoStats.timePlayed?.displayValue, inline: true},
            {name: `Score`, value: csgoStats.score?.displayValue, inline: true},
            {name: `Kills`, value: csgoStats.kills?.displayValue, inline: true},
            {name: `Deaths`, value: csgoStats.deaths?.displayValue, inline: true},
            {name: `KD`, value: csgoStats.kd?.displayValue, inline: true},
            {name: `Damage`, value: csgoStats.damage?.displayValue, inline: true},
            {name: `Headshots`, value: csgoStats.headshots?.displayValue, inline: true},
            {name: `Shots Accuracy`, value: csgoStats.shotsAccuracy?.displayValue, inline: true},
            {name: `MVP`, value: csgoStats.mvp?.displayValue, inline: true},
            {name: `Wins`, value: csgoStats.wins?.displayValue, inline: true},
            {name: `Matches Played`, value: csgoStats.matchesPlayed?.displayValue, inline: true},
            {name: `W/L percentage`, value: csgoStats.wlPercentage?.displayValue, inline: true},
            {name: `HS Percentage`, value: csgoStats.headshotPct?.displayValue, inline: true},
        )
        .setColor("Random")
        .setFooter({
            text: 'Note: if it says undefined, then that means this player does not have the stat for that certain thing or the API does not pull it.'
        })

        await interaction.reply({embeds: [csgoPlayerStatsEmbed]})
        
        //console.log(body.data.segments)
    }
}