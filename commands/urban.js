const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const {request} = require('undici')

const trim = (str, max) => (str.length > max ? `${str.slice(0, max - 3)}...` : str);

async function getJSONResponse(body) {
	let fullBody = '';

	for await (const data of body) {
		fullBody += data.toString();
	}
	return JSON.parse(fullBody);
}

module.exports = {
    data: new SlashCommandBuilder()
    .setName('define')
    .setDescription('Sends you a definition from urban dictionary')
    .addStringOption(option => option.setName('term').setDescription("put the word here").setRequired(true)),
    async execute(interaction){
        const term = interaction.options.getString('term');
		const query = new URLSearchParams({ term });

		const dictResult = await request(`https://api.urbandictionary.com/v0/define?${query}`);
		const { list } = await getJSONResponse(dictResult.body);

		if (!list.length) {
			return interaction.editReply(`No results found for **${term}**.`);
		}

        const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
        const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];

		const [answer] = list;

		const embed = new EmbedBuilder()
			.setColor(randomSideColor)
			.setTitle(answer.word)
			.setURL(answer.permalink)
			.addFields(
				{ name: 'Definition', value: trim(answer.definition, 1024) },
				{ name: 'Example', value: trim(answer.example, 1024) },
				{
					name: 'Rating',
					value: `${answer.thumbs_up} thumbs up. ${answer.thumbs_down} thumbs down.`,
				},
			);
            embed.setImage('https://i.kym-cdn.com/photos/images/newsfeed/001/052/958/ddd.gif')
            embed.setFooter({text: 'A Zewo Command ;)', iconURL: 'https://i.giphy.com/media/WoFiFuqscSFXzuCHv4/giphy.gif'})
		interaction.reply({ embeds: [embed] });
        
    }
}

