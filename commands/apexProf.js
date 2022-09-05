const {SlashCommandBuilder, EmbedBuilder, Embed} = require('discord.js')
const request = require('node-superfetch')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('apex')
    .setDescription('Shows you Apex Legend stats for a player.')
    .addStringOption(option => option.setName('platform').setDescription('For xbox type: xbl, for PC: origin, and for Playstation: psn').setRequired(true))
    .addStringOption(option => option.setName('user').setDescription('Type in their IGN').setRequired(true)),
    async execute(interaction, client){
        const platformIg = interaction.options.getString('platform')
        const userNameIg = interaction.options.getString('user')
        const { body } = await request.get(`https://public-api.tracker.gg/v2/apex/standard/profile/${platformIg}/${userNameIg}`, {headers: { 'TRN-Api-Key': `${process.env.TRNkey}` }})
        const apex = body.data
        const apexStats = body.data.segments[0].stats
        const apexPlayerStatsEmbed = new EmbedBuilder()
        .setTitle(`${apex.platformInfo.platformUserId}'s Apex Stats`)
        .setThumbnail(apex.platformInfo.avatarUrl)
        .setDescription('Note: some stats may be incorrect.')
        .addFields(
            {name: 'Platform', value: `${apex.platformInfo.platformSlug}`, inline: true },
            {name: 'Level', value: `${apexStats.level?.displayValue}`, inline: true },
            {name: 'All Time Kills', value: `${apexStats.kills?.displayValue}`, inline: true },
            {name: 'Kills Per Match', value: `${apexStats.killsPerMatch?.displayValue}`, inline: true },
            {name: 'Damage', value: `${apexStats.damage?.displayValue}`, inline: true },
            {name: 'Matches Played', value: `${apexStats.matchesPlayed?.displayValue}`, inline: true },
            {name: 'Revives', value: `${apexStats.revives?.displayValue}`, inline: true },
            {name: 'Rank', value: `${apexStats.arenaRankScore?.metadata.rankName}`, inline: true },
            {name: 'Kills as Kill Leader', value: `${apexStats.killsAsKillLeader?.displayValue}`, inline: true },
        )
        .setColor("Random")
        .setFooter({
            text: 'Note: if it says undefined, then that means this player does not have the stat for that certain thing or the API does not pull it.'
        })

        await interaction.reply({embeds: [apexPlayerStatsEmbed]})
        console.log(apexStats)
        //console.log(body.data.segments)
    }
}