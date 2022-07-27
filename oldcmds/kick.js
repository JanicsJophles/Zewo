const { SlashCommandBuilder } = require('@discordjs/builders')
const { Permissions } = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
    .setName('kick')
    .setDescription('kicks sheen (jk it kicks any user)')
    .addUserOption(option => option.setName('target').setDescription('whos been a bad kitten >:(').setRequired(true))
    .addStringOption(option => option.setName('reason').setDescription('the reason ur kicking them')),
    permission: [ Permissions.FLAGS.KICK_MEMBERS ],
    async execute(interaction, client) {
        

        const kickUser = interaction.options.getUser('target')
        const kickMember = await interaction.guild.members.fetch(kickUser.id);
        if (!kickMember) return await interaction.reply({ content: `the kitten that was mentioned isnt in the server`, ephemeral: true});

        let reason = interaction.options.getString('reason')
        if (!reason) reason = "no reason was provided breh"

        await kickMember.send({ content: `You have been kicked from a server!\nServer: ${interaction.guild.name}\nReason: ${reason}`})
            .catch(err => console.log(`the kitten didnt receive the message because their dms may be off`))

        
        await interaction.reply({ content: `The kitten, ${kickUser.tag} was kicked`})
    }
}