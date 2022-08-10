const { 
    SlashCommandBuilder,
    PermissionFlagsBits,
    PermissionsBitField,
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
    
    if (roles.cache.has('994458947798978668')){
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}. There are ${servers} servers that have this bot! The server names are ${serverNames}`);
    } else {
        await interaction.reply('you cant use this cmd!!')
    }

    

    
    
    
	
    }
}