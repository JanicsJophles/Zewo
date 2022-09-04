const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const request = require('node-superfetch')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('track')
		.setDescription("shows you info about a song ;D")
        .addStringOption(option => option.setName('trackname').setDescription('put any song name here').setRequired(true))
        .addStringOption(option => option.setName('artistname').setDescription('put the artist\'s name here').setRequired(true)),
		async execute(interaction) {

            const artist = interaction.options.getString('artistname')
            const songName = interaction.options.getString('trackname')
            
            const { body } = await request.get(`https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=dfa41c14e649054414f83b98315d23d1&artist=${artist}&track=${songName}&format=json`)
        
            const track = body.track
            
            const trackName = track.name
            const trackUrl = track.url
            const trackDuration = track.duration
            const trackListeners = track.listeners
            const trackPlayCount = track.playcount
            const trackArtist = track.artist.name
            const trackImage = track.album?.image[2]['#text']
            const trackPublished = track.wiki?.published
            const trackMbid = track.artist.mbid
            const mbid = (trackMbid === undefined) ? 'undefined mbid' : trackMbid

            const trackimfg = (trackImage === undefined) ? 'http://assets.fontsinuse.com/static/use-media-items/7/6279/full-700x700/502ab759/last-fm-logo.png' : trackImage
            const trackPub = (trackPublished === undefined) ? 'No time' : trackPublished

            const minutes = Math.floor(trackDuration / 60000)
            const seconds = ((trackDuration % 60) / 1000).toFixed(0)
           const time = seconds == 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds

            

            
        try{
            const embed = new EmbedBuilder()
            .setTitle(trackName)
            .setURL(trackUrl)   
            .addFields(
                {name: 'Track Duration', value: time, inline: true},
                {name: 'Track Listeners', value: trackListeners, inline: true},
                {name: 'Track Playcount', value: trackPlayCount, inline: true},
                {name: 'Track Artist', value: trackArtist, inline: true},
                {name: 'Track Published', value: trackPub, inline: true},
                {name: 'mbid', value: mbid, inline: true},
            )
            .setImage(trackimfg)
            .setColor('Random')
		await interaction.reply({embeds: [embed]});
        console.log(track)
        
        
        } catch (error){
            console.error(error)
            await interaction.reply({content: 'There was an error processing ur request, try again or make sure you spelled everything right.', ephemeral: true })
        }
            
        
	},
};