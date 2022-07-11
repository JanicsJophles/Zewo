const { SlashCommandBuilder } = require('@discordjs/builders')
const { Permissions } = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
    .setName('ban')
    .setDescription('bans sheen (jk it bans any user)')
    .addUserOption(option => option.setName('target').setDescription('whos been a bad kitten >:(').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('the reason ur banning them')),
    permission: [ Permissions.FLAGS.BAN_MEMBERS ],
    async execute(interaction, client) {
        

        const banUser = interaction.options.getUser('target')
        const banMember = await interaction.guild.members.fetch(banUser.id);
        if (!banMember) return await interaction.reply({ content: `the kitten that was mentioned isnt in the server`, ephemeral: true});

        let reason = interaction.options.getString('reason')
        if (!reason) reason = "no reason was provided breh"

        await banMember.send({ content: `You have been banned from a server!\nServer: ${interaction.guild.name}\nReason: ${reason}`})
            .catch(err => console.log(`the kitten didnt receive the message because their dms may be off`))

        await banMember.ban({ days: 7, reason: reason})
        .catch(err => console.error(err))
        
        await interaction.reply({ content: `The kitten, ${banUser.tag} was banned`})
    }
}