const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const LastFmNode = require('lastfm').LastFmNode
const axios = require('axios');
const SpotifyWebApi = require('spotify-web-api-node');

const lastfmApiUrl = 'http://ws.audioscrobbler.com/2.0/?method=';
const method = 'user.getRecentTracks';



const lastfm = new LastFmNode({
    api_key: 'dfa41c14e649054414f83b98315d23d1',
  secret: 'd7fb1921ba2ae77ed6a1c7a6e809ea00'
})



module.exports = {
  
    data: new SlashCommandBuilder()
    .setName('np')
    .setDescription('shows whats playing for you! this command will be updated later')
    .addStringOption(option => option
			.setName('user')
			.setDescription('Enter a last.fm username')
			.setRequired(true)),

    async execute(interaction, client){
      // await interaction.deferReply();
      const user = interaction.options.getString('user');
        // const queryString = `&user=${user}&api_key=${process.env.LastFMKey}&limit=2&format=json`;
        // const requestUrl = `${lastfmApiUrl}${method}${queryString}`;
        
        lastfm.session((err, session) => {
          if (err) return console.error(err);
        
          console.log(`Last.fm session key: ${session.key}`);
        });
        await interaction.reply('jello')
        
        // try {
        //   const res = await axios.get(requestUrl);
    
        //   if (res.data.message) {
        //     await interaction.editReply('User not found');
        //     return;
        //   }
    
        //   const latestTrack = res.data.recenttracks.track[0];
    
        //   if (!latestTrack) {
        //     await interaction.editReply('User not found');
        //     return;
        //   }
    
        //   const {
        //     name,
        //     artist: { '#text': artist },
        //   } = latestTrack;
    
        //   await interaction.editReply(`${user} is currently listening to: ${name} - ${artist}`);
        // }
        // catch (error) {
        //   console.error('err:', error);
        //   await interaction.editReply({ content: 'There was an error while executing this command!', ephemeral: true });
        // }
    }
}
