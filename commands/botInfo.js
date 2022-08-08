const { 
    SlashCommandBuilder,
    PermissionFlagsBits,
    PermissionsBitField,
    EmbedBuilder
 } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('serverinfo')
    .setDescription('displays server info')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction){
    const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
    const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];
    const embed = new EmbedBuilder()
    .setTitle(`Info for ${interaction.guild.name}`)
    .setThumbnail(`${interaction.guild.iconURL()}`)
    .addFields(
        {name: `Guild ID`, value: `${interaction.guild.id}`, inline: true},
        {name: `Description of server`, value: `${interaction.guild.description}`, inline: true},
        {name: `Server Boost Level`, value: `${interaction.guild.verificationLevel}`, inline: true},
        {name: `Owner`, value: `<@${interaction.guild.ownerId}>`, inline: true},
        {name: `Amount of Server Boosts`, value: `${interaction.guild.premiumSubscriptionCount}`, inline: true},
        {name: `Member Count`, value: `${interaction.guild.memberCount}`, inline: true},
        {name: `Preferred Language`, value: `${interaction.guild.preferredLocale}`, inline: true},
        

    )
    .setColor(randomSideColor)
    
    
    //.setFooter("last Checked:").setTimestamp();
    await interaction.reply({embeds: [embed]});
        
    } 
    
	
   }
