const {SlashCommandBuilder, EmbedBuilder, Embed} = require('discord.js')
const wait = require('node:timers/promises').setTimeout;
module.exports = {
    data: new SlashCommandBuilder()
    .setName('fmlogin')
    .setDescription('A log in for Last.fm'),
    async execute(interaction, client){
        const embed = new EmbedBuilder()
        .setTitle('Click this link to log in and allow access :D')
        .setURL('https://www.last.fm/api/auth?api_key=dfa41c14e649054414f83b98315d23d1&token=Zg7cLQrDXgeV99oURJwNfoBxBmlwALE2')
        .setColor('Random')
        .setDescription('You only have 3 minutes to do this, so act fast.')

        const embedExpired = new EmbedBuilder()
        .setTitle('Your time has expired')
        .setDescription('Run the command again to get your link.')
        await interaction.reply({embeds: [embed], ephemeral: true})
        await wait(180000)
        interaction.followUp({embeds: [embedExpired], ephemeral: true})
    }
}