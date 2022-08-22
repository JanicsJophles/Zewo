const {SlashCommandBuilder, EmbedBuilder, Options, Embed, PermissionFlagsBits} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('bans a user')
    .setDMPermission(true)
    .addUserOption(option => option.setName('target').setDescription('select a bad kitten').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('why are they being banned :(').setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.KickMembers | PermissionFlagsBits.BanMembers),

    async execute(interaction, client){
        const bannedUser = interaction.options.getUser('target')
        const bannedMember = await interaction.guild.members.fetch(bannedUser.id)

        if(!bannedMember) return await interaction.reply({content: `User isnt in the server anymore`, ephemeral: true})

        let reason = interaction.options.getString('reason')

        const embed = new EmbedBuilder()
        .setTitle(`You have been banned from ${interaction.guild}`)
        .setDescription(`You have been banned for: **${reason}**\nYou have been banned by: ${interaction.user}\n To appeal, please go to: https://discord.gg/qGGbC3cRN4`)
        

        await bannedMember.send({embeds: [embed]}).catch(err => interaction.reply('User didnt receive msg. Dms could be off.'))

        await bannedMember.ban({ days: 7, reason: reason}).catch(err => console.error(err))

        await interaction.reply({content: `banned kitten ${bannedUser.tag}`})
    }
    
}