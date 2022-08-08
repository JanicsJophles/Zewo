const { 
    SlashCommandBuilder,
    PermissionFlagsBits,
    PermissionsBitField
 } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('botinfo')
    .setDescription('displays bot info')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction, client){
    const {roles} = interaction.member
    const role = await interaction.guild.roles.fetch('994458947798978668')
    
    if (roles.cache.has('994458947798978668')){
        await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}.`);
    } else {
        await interaction.reply('you cant use this cmd!!')
    }
    
    
	
    }
}