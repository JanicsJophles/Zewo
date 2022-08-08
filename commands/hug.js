const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const { request } = require('undici');


module.exports = {
    data: new SlashCommandBuilder()
    .setName('hug')
    .setDescription('hug a user!!')
    .addUserOption(option => option.setName('target').setDescription('who r u going to hug').setRequired(true)),
    async execute(interaction){
    let member = interaction.user.tag
    let mentionedMember = interaction.options.getUser('target')
    let avatarURL = interaction.user.displayAvatarURL({format: "png", dynamic: false})
    //let avatarURL = interaction.options.getUser('target').displayAvatarURL({format: "png", dynamic: false})
    const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
    const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];
    const randomImgs = [
    "https://c.tenor.com/7zb6sgeEKIEAAAAM/snap.gif",
    "https://c.tenor.com/8Jk1ueYnyYUAAAAM/hug.gif",
    "https://c.tenor.com/1T1B8HcWalQAAAAM/anime-hug.gif",
    "https://i.gifer.com/2QEa.gif",
    "https://acegif.com/wp-content/gif/anime-hug-38.gif",
    "http://25.media.tumblr.com/tumblr_ma7l17EWnk1rq65rlo1_500.gif",
    "https://media2.giphy.com/media/IRUb7GTCaPU8E/giphy.gif",
    "https://i.pinimg.com/originals/42/8b/7e/428b7ed57db9d7aeb2e3f70f21f7bb25.gif",
    "https://media1.giphy.com/media/wnsgren9NtITS/200.gif",
    "https://i.gifer.com/Txh9.gif",
    "http://37.media.tumblr.com/f2a878657add13aa09a5e089378ec43d/tumblr_n5uovjOi931tp7433o1_500.gif",
    "https://i.pinimg.com/originals/b8/7f/8b/b87f8b1e2732c534a00937ffb24baa79.gif",
    "https://acegif.com/wp-content/gif/anime-hug-59.gif",
    "https://thumbs.gfycat.com/AlienatedUnawareArcherfish-size_restricted.gif"
]
    const randomImg = randomImgs[Math.floor(Math.random() * randomImgs.length)];
    
    const embed = new EmbedBuilder()
    .setAuthor({name: `${member} hugged ${mentionedMember.tag}.. aww how cute`, iconURL: `${avatarURL}`})
    .setImage(randomImg)
    .setColor(randomSideColor)
    await interaction.reply({content: `${mentionedMember}`, embeds: [embed]})     
    }
    
}





//https://sheetdb.io/api/v1/ajym2ewumd415



    
  