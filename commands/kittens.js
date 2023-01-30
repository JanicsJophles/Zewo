const {SlashCommandBuilder, EmbedBuilder, Embed} = require('discord.js')
const request = require('node-superfetch')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('kittens')
    .setDescription('cute kitty'),
    async execute(interaction){
        const { body } = await request.get(`https://www.reddit.com/r/kittens/random/.json`)
        const post = body[0].data.children[0].data
        const imagesTruly = post.url
        const extension = imagesTruly.split('.').pop();
        const embed = new EmbedBuilder()
        .setTitle("What a cute kitten :D")
        .setColor('Random')
        .setImage(imagesTruly)

        if(extension === 'gif' || extension === 'png' || extension === 'jpg'){
            interaction.reply({embeds: [embed]})
        }   
        
        
    
    }
    
}