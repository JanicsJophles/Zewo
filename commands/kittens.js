const {SlashCommandBuilder, EmbedBuilder, Embed} = require('discord.js')
const request = require('node-superfetch')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('puppysmile')
    .setDescription('sends a picture of a cute pup smilin ;D'),
    async execute(interaction){
        const { body } = await request.get(`https://www.reddit.com/r/kittens/random/.json`)
        const post = body[0].data.children[0].data
        const imagesTruly = post.url
        const extension = imagesTruly.split('.').pop();
        const embed = new EmbedBuilder()
        .setTitle("What a cute puppy :D")
        .setColor('Random')
        .setImage(imagesTruly)

        if(extension === 'gif' || extension === 'png' || extension === 'jpg'){
            interaction.reply({embeds: [embed]})
        }   
        
        
    
    }
    
}