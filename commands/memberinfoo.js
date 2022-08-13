const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('memberinfo')
    .setDescription('shows info about a member of the server')
    .addUserOption(options => options.setName('target').setDescription('select a user (optional)').setRequired(false)),
    async execute(interaction){
        const dumbBalls = interaction.user
        const dumb = interaction.member
        const mentionedMember = interaction.options.getUser('target')
        const roles = dumb._roles
        const mentionRoles = roles.map(r => `<@&${r}>`)

        const embed =  new EmbedBuilder()
        .setAuthor({name: `Info for ${dumbBalls.tag}`, 
                    iconURL: `${dumbBalls.displayAvatarURL({format: `png`})}`, 
                    
                    })
        .addFields(
            {name: `Nickname:`, value: `${dumb.nickname}`},
            {name: `ID:`, value: `${dumbBalls.id}`, inline: true},
            {name: `Is a bot?`, value: `${dumbBalls.bot}`, inline:true},
            {name: `Member Created At:`, value: `${dumbBalls.createdAt}`},
            {name: `Member Joined At:`, value: `${dumb.joinedAt}`,},
            {name: `Members Roles:`, value: `${mentionRoles}`},
        )

        
        await interaction.reply({embeds: [embed]})
        
    }

}