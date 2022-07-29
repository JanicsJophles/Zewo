const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
    .setName('slap')
    .setDescription('quite literally e-slaps a user')
    .addUserOption(option => option.setName('target').setDescription('who r u going to slap').setRequired(true)),
    async execute(interaction){
    let member = interaction.user.tag
    let mentionedMember = interaction.options.getUser('target')
    let avatarURL = interaction.user.displayAvatarURL({format: "png", dynamic: false})
    //let avatarURL = interaction.options.getUser('target').displayAvatarURL({format: "png", dynamic: false})
    const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
    const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];
    const randomImgs = [
    "https://c.tenor.com/Ws6Dm1ZW_vMAAAAC/girl-slap.gif", 
    "https://c.tenor.com/CvBTA0GyrogAAAAC/anime-slap.gif", 
    "https://c.tenor.com/rVXByOZKidMAAAAd/anime-slap.gif",
    "https://media3.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
    "https://i.gifer.com/WpWp.gif",
    "https://i.pinimg.com/originals/1c/8f/0f/1c8f0f43c75c11bf504b25340ddd912d.gif",
    "https://i.pinimg.com/originals/fe/39/cf/fe39cfc3be04e3cbd7ffdcabb2e1837b.gif",
    "https://thumbs.gfycat.com/AllSilkyGreendarnerdragonfly-max-1mb.gif",
    "https://media1.giphy.com/media/m6etefcEsTANa/200.gif"
]
    const randomImg = randomImgs[Math.floor(Math.random() * randomImgs.length)];
    
    const embed = new EmbedBuilder()
    .setAuthor({name: `${member} slapped ${mentionedMember.tag}!!!`, iconURL: `${avatarURL}`})
    .setImage(randomImg)
    .setColor(randomSideColor)
    await interaction.reply({content: `${mentionedMember}`, embeds: [embed]})     
    }
    
}





//https://sheetdb.io/api/v1/ajym2ewumd415



    
  