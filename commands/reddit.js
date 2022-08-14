const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const request = require('node-superfetch')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('reddits')
    .setDescription('get a post from any reddit. just type the name!')
    .addStringOption(option => option.setName('input').setDescription('put any subreddit here').setRequired(true)),

    
    async execute(interaction, client){
    const reddits = interaction.options.getString('input')
    const { body } = await request.get(`https://www.reddit.com/r/${reddits}/random/.json`)
    const post = body[0].data.children[0].data
    
    const embed = new EmbedBuilder()
   .setTitle(`${post.title}`)
   .setURL(`https://www.reddit.com${post.permalink}`)
    .setImage(`${post.url}`)
    .setFooter({text: `👍 ${post.ups} | 👎 ${post.downs} | 💬 ${post.num_comments}`})
    .setColor('Random')
    if(reddits == reddits && '' && reddits){
        interaction.reply('You cannot add spaces.')
    } else {
        interaction.reply({embeds: [embed]})
    }
    
        
    }
}