const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
    .setName('daniel')
    .setDescription('daniels command')
    .addUserOption(option => option.setName('target').setDescription('select a user...').setRequired(true)),
    async execute(interaction){
    let member = interaction.user.tag
    let mentionedMember = interaction.options.getUser('target')
    let avatarURL = interaction.user.displayAvatarURL({extension: "png", dynamic: false})
    const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
    const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];

    
    const embed = new EmbedBuilder()
    .setAuthor({name: `${member} came on ${mentionedMember.tag}.. wtf`, iconURL: `${avatarURL}`})
    .setImage('https://cdn-prod.medicalnewstoday.com/content/images/articles/296/296564/milk.jpg')
    .setColor(randomSideColor)
    await interaction.reply({content: `${mentionedMember}`, embeds: [embed]})     
    }
    
}





//https://sheetdb.io/api/v1/ajym2ewumd415



    
  