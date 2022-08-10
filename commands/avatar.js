const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('avatar')
    .setDescription('shows ur avatar or someone elses')
    .addUserOption(option => option.setName('target').setDescription('find a users avatar').setRequired(false)),
    async execute(interaction){
    const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
    const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];
    const member = interaction.user
    const mentionedMember = interaction.options.getUser('target')
    const memberAvatarURL = interaction.user.displayAvatarURL({extension: "png", dynamic: false})
    
    if(mentionedMember){
        const embed = new EmbedBuilder()
        .setAuthor({name: `The avatar for ${mentionedMember.tag}`})
        .setDescription(`Their ID: ${mentionedMember.id}`)
        .setImage(`${mentionedMember.displayAvatarURL()}`)
        .setColor(randomSideColor)
        return interaction.reply({embeds: [embed]})
    }  if(member) {
        const otherEmbed = new EmbedBuilder()
        .setTitle(`The avatar for ${member.tag}`)
        .setDescription(`Their ID: ${member.id}`)
        .setImage(`${memberAvatarURL}`)
        .setColor(randomSideColor)
        return interaction.reply({embeds: [otherEmbed]})
    }
    
    
    }
}