const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const request = require('node-superfetch')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('food')
    .setDescription('sends food from reddit yum'),
    
    async execute(interaction, client){
    const { body } = await request.get(`https://www.reddit.com/r/foodporn/random/.json`)
    const post = body[0].data.children[0].data
    
    if(post.url){
        const embed = new EmbedBuilder()
        .setAuthor({name: `${post.subreddit_name_prefixed}`})
       .setTitle(`${post.title}`)
       .setURL(`https://www.reddit.com${post.permalink}`)
        .setImage(`${post.url}`)
        .setFooter({text: `👍 ${post.ups} | 👎 ${post.downs} | 💬 ${post.num_comments}`})
        .setColor('Random')
            
        interaction.reply({embeds: [embed]})
    } else {
        let videofile = post.url
        interaction.reply({context: `MP4 post from ${post.subreddit_name_prefixed}\nTitle: ${post.title}\nURL: https://www.reddit.com${post.permalink}\n👍 ${post.ups} | 👎 ${post.downs} | 💬 ${post.num_comments}`, files: [videofile]})
    }
   
        
    }
}