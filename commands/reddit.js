const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const request = require('node-superfetch')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('reddits')
    .setDescription('get a post from any reddit. just type the name!')
    .addStringOption(option => option.setName('input').setDescription('put any subreddit here').setRequired(true)),

    
    async execute(interaction, client){
        
    let reddits = interaction.options.getString('input')
    reddits = reddits.replace(/\s/g, '');
    const { body } = await request.get(`https://www.reddit.com/r/${reddits}/random/.json`)
    const post = body[0].data.children[0].data
    const imagesTruly = post.url
    const extension = imagesTruly.split('.').pop();
    const embed = new EmbedBuilder()
        .setAuthor({name: `${post.subreddit_name_prefixed}`})
       .setTitle(`${post.title}`)
       .setURL(`https://www.reddit.com${post.permalink}`)
        .setImage(`${imagesTruly}`)
        .setFooter({text: `👍 ${post.ups} | 👎 ${post.downs} | 💬 ${post.num_comments}`})
        .setColor('Random')
    if(extension == 'gif' || 'jpg' || 'png'){
        interaction.reply({embeds: [embed]})
    } else {
        const embedTwo = new EmbedBuilder()
        .setAuthor({name: `${post.subreddit_name_prefixed}`})
       .setTitle(`${post.title}`)
       .setURL(`https://www.reddit.com${post.permalink}`)
        .setFooter({text: `👍 ${post.ups} | 👎 ${post.downs} | 💬 ${post.num_comments}`})
        .setColor('Random')
        interaction.reply({content: `Gifv/MP4 post from ${post.subreddit_name_prefixed}\nTitle: ${post.title}\nURL: https://www.reddit.com${post.permalink}\n👍 ${post.ups} | 👎 ${post.downs} | 💬 ${post.num_comments}\n${post.url}`})
    }
    
        
            
        
        
     
        // let videofile = post.url
        // interaction.reply({context: `MP4 post from ${post.subreddit_name_prefixed}\nTitle: ${post.title}\nURL: https://www.reddit.com${post.permalink}\n👍 ${post.ups} | 👎 ${post.downs} | 💬 ${post.num_comments}`, files: [videofile]})
    
    
    
    
        
    }
}