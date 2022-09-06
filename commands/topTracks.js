const {SlashCommandBuilder, EmbedBuilder, Embed} = require('discord.js')
const LastFM = require('last-fm')
const lastfm = new LastFM(`${process.env.LastFMkey}`, { userAgent: `Zewo/1.0.0 (https://ws.audioscrobbler.com/2.0/)` })

module.exports = {
    data: new SlashCommandBuilder()
    .setName('topartists')
    .setDescription('Shows the top 10 Artists right now.'),
    async execute(interaction){
        const promise = new Promise((resolve, reject) => {
            lastfm.chartTopArtists({p: 1}, (err, data) => {
                if (err) return reject(err);
                try {
                    resolve(data);
                } catch(error) {
                    reject(error);
                }
            });
        });
        const data = await promise
        

        const artist = data.result
        const artistOne = artist[0].name
        const artistTwo = artist[1].name
        const artistThree = artist[2].name
        const artistFour = artist[3].name
        const artistFive = artist[4].name
        const artistSix = artist[5].name
        const artistSeven = artist[6].name
        const artistEight = artist[7].name
        const artistNine = artist[8].name
        const artistTen = artist[9].name

        const lartistOne = artist[0].listeners
        const lartistTwo = artist[1].listeners
        const lartistThree = artist[2].listeners
        const lartistFour = artist[3].listeners
        const lartistFive = artist[4].listeners
        const lartistSix = artist[5].listeners
        const lartistSeven = artist[6].listeners
        const lartistEight = artist[7].listeners
        const lartistNine = artist[8].listeners
        const lartistTen = artist[9].listeners


        const topArtistsEmbed = new EmbedBuilder()
        .setTitle('Top Artists RIGHT NOW!!')
        .addFields(
            {name: `Number 1 Artist: ${artistOne}`, value: `${lartistOne} listeners.`, inline: true},
            {name: `Number 2 Artist: ${artistTwo}`, value: `${lartistTwo} listeners.`, inline: true},
            {name: `Number 3 Artist: ${artistThree}`, value: `${lartistThree} listeners.`, inline: true},
            {name: `Number 4 Artist: ${artistFour}`, value: `${lartistFour} listeners.`, inline: true},
            {name: `Number 5 Artist: ${artistFive}`, value: `${lartistFive} listeners.`, inline: true},
            {name: `Number 6 Artist: ${artistSix}`, value: `${lartistSix} listeners.`, inline: true},
            {name: `Number 7 Artist: ${artistSeven}`, value: `${lartistSeven} listeners.`, inline: true},
            {name: `Number 8 Artist: ${artistEight}`, value: `${lartistEight} listeners.`, inline: true},
            {name: `Number 9 Artist: ${artistNine}`, value: `${lartistNine} listeners.`, inline: true},
            {name: `Number 10 Artist: ${artistTen}`, value: `${lartistTen} listeners.`, inline: true},
            
        )
     interaction.reply({embeds: [topArtistsEmbed]})

    }

}