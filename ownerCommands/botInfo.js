const { 
    SlashCommandBuilder,
    PermissionFlagsBits,
    PermissionsBitField,
    EmbedBuilder,
 } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('displays bot info')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client){
    let servers = client.guilds.cache.size
    let serverNames = client.guilds.cache.map(g => g.name)
    
    const {roles} = interaction.member
    const role = await interaction.guild.roles.fetch('994458947798978668')
    const embed = new EmbedBuilder()
    .setTitle("Bot Info")
    .setAuthor({name: `Bot Name: Zewo`})
    .setFields(
        {name: `Total Servers:`, value: `${servers}`},
        {name: `Server Names:`, value: `${serverNames}`}
    )
    if (roles.cache.has('994458947798978668')){
        await interaction.reply({embeds: [embed]});
    } else {
        await interaction.reply('you cant use this cmd!!')
    }

    

    
    
    
	
    }
}