const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const request = require('node-superfetch')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('meme')
    .setDescription('sends a meme from r/meme on reddit :D'),
    
    async execute(interaction, client){
    const { body } = await request.get(`https://www.reddit.com/r/memes/random/.json`)
    const post = body[0].data.children[0].data
    
    const embed = new EmbedBuilder()
    .setAuthor({name: `${post.subreddit_name_prefixed}`})
   .setTitle(`${post.title}`)
   .setURL(`https://www.reddit.com${post.permalink}`)
    .setImage(`${post.url}`)
    .setFooter({text: `👍 ${post.ups} | 👎 ${post.downs} | 💬 ${post.num_comments}`})
    .setColor('Random')
        
    interaction.reply({embeds: [embed]})
        
    }
}