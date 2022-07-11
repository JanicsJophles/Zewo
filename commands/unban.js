const { SlashCommandBuilder } = require('@discordjs/builders')
const { Permissions } = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
    .setName('unban')
    .setDescription('unbans kitten')
    .addStringOption(option => option.setName('target').setDescription('whos been a bad kitten >:(').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('reason for unban (optional)')),
    permission: [ Permissions.FLAGS.BAN_MEMBERS ],
    async execute(interaction, client) {
        const userID = interaction.options.getString('target')
        let reason = interaction.options.getString('reason')
        if (!reason) reason = "no reason was provided"
        
        await interaction.guild.bans.fetch()
        .then(async bans => {
            if (bans.size == 0) return await interaction.reply({ content: `There is nobody banned from this server`, ephemeral: true})
            let bannedID = bans.find(ban => ban.user.id == userID)
            if (!bannedID) return await interaction.reply({ content: `The ID stated isnt banned from this server`})
            await interaction.guild.bans.remove(userID, reason).catch(err => console.error(err))
            await interaction.reply({content: `User ID: ${userID} is unbanned`})

        })
      
}
}








