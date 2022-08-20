const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const request  = require('node-superfetch');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('kiss')
    .setDescription('kiss a user...... uhh')
    .addUserOption(option => option.setName('target').setDescription('who r u going to kiss').setRequired(true)),
    async execute(interaction){
    let member = interaction.user.tag
    let mentionedMember = interaction.options.getUser('target')
    let avatarURL = interaction.user.displayAvatarURL({format: "png", dynamic: false})
    //let avatarURL = interaction.options.getUser('target').displayAvatarURL({format: "png", dynamic: false})
    const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
    const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];
    const { body } = await request.get(`https://sheetdb.io/api/v1/ajym2ewumd415`)
    const images = body[Math.floor(Math.random() * body.length)].url
    
    
    const embed = new EmbedBuilder()
    .setAuthor({name: `${member} kissed ${mentionedMember.tag}.. aww`, iconURL: `${avatarURL}`})
    .setImage(images)
    .setColor(randomSideColor)
    await interaction.reply({content: `${mentionedMember}`, embeds: [embed]})     
    }
    
}





//https://sheetdb.io/api/v1/ajym2ewumd415



    
  