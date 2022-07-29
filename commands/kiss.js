const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const { request } = require('undici');


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
    const randomImgs = [
    "https://c.tenor.com/wDYWzpOTKgQAAAAC/anime-kiss.gif", 
    "https://i.pinimg.com/originals/2b/52/71/2b5271e20fa65925e07d0338fa290135.gif", 
    "https://c.tenor.com/wDYWzpOTKgQAAAAC/anime-kiss.gif",
    "https://c.tenor.com/I8kWjuAtX-QAAAAM/anime-ano.gif",
    "https://www.gifcen.com/wp-content/uploads/2022/03/anime-kiss-gif-5.gif",
    "https://www.gifcen.com/wp-content/uploads/2022/03/anime-kiss-gif-4.gif",
    "https://cutewallpaper.org/21/anime-romantic-kiss/Anime-kiss-GIFs-Get-the-best-GIF-on-GIPHY.gif",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1u476rs7k5UlP2XuWr8FQOraroksZio8uOA&usqp=CAU",
    "https://i.pinimg.com/originals/24/27/31/242731e38aab7263c66467c979a9e1b0.gif"
]
    const randomImg = randomImgs[Math.floor(Math.random() * randomImgs.length)];
    
    const embed = new EmbedBuilder()
    .setAuthor({name: `${member} kissed ${mentionedMember.tag}.. aww`, iconURL: `${avatarURL}`})
    .setImage(randomImg)
    .setColor(randomSideColor)
    await interaction.reply({content: `${mentionedMember}`, embeds: [embed]})     
    }
    
}





//https://sheetdb.io/api/v1/ajym2ewumd415



    
  