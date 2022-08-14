const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('memberinfo')
    .setDescription('shows info about a member of the server')
    .addUserOption(options => options.setName('target').setDescription('select a user (optional)').setRequired(false)),
    async execute(interaction){
        //member not mentioned start
        const dumbBalls = interaction.user
        const dumb = interaction.member
        const roles = dumb._roles
        const mentionRoles = roles.map(r => `<@&${r}>`)
        const roleees = (mentionRoles == '') ? 'no roles' : mentionRoles
        const nameOfNick = dumb.nickname
        const nick = (nameOfNick == 'null') ? 'no nickname' : nameOfNick

        //end 


        
        

        

        const embed =  new EmbedBuilder()
        .setAuthor({name: `Info for ${dumbBalls.tag}`, 
                    iconURL: `${dumbBalls.displayAvatarURL({format: `png`})}`, 
                    
                    })
        .addFields(
            {name: `Nickname:`, value: `${nick}`},
            {name: `ID:`, value: `${dumbBalls.id}`},
             {name: `Member Created At:`, value: `${dumbBalls.createdAt}`},
             {name: `Member Joined At:`, value: `${dumb.joinedAt}`,},
             {name: `Members Roles:`, value: `${roleees}`},
        )

        
        if(interaction.options.getMember('target') || interaction.options.getUser('target') == true){
            const menMember = interaction.options.getMember('target')
        const mentionedMember = interaction.options.getUser('target')
        const menRoles = menMember._roles
        const menMemberRoles = menRoles.map(r => `<@&${r}>`)
        const menMsenRoles = (menMemberRoles == '') ? 'no roles' : menMemberRoles

        const embedTwo = new EmbedBuilder()
        .setAuthor({name: `Info for ${mentionedMember.username}`, 
                    iconURL: `${mentionedMember.displayAvatarURL({format: `png`})}`, 
                    
                    })
        .addFields(
            {name: `Nickname:`, value: `${menMember.nickname}`},
            {name: `ID:`, value: `${menMember.id}`},
             {name: `Member Created At:`, value: `${mentionedMember.createdAt}`},
             {name: `Member Joined At:`, value: `${menMember.joinedAt}`,},
             {name: `Members Roles:`, value: `${menMsenRoles}`},
        )


            await interaction.reply({embeds: [embedTwo]})
        }   else    {
            await interaction.reply({embeds: [embed]})
        }
        
        

        
        
    }

}