const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')
const { request } = require('undici');
async function getJSONResponse(body) {
	let fullBody = '';

	for await (const data of body) {
		fullBody += data.toString();
	}

	return JSON.parse(fullBody);
}





module.exports = {
    data: new SlashCommandBuilder()
	.setName("randomcat")
	.setDescription("sends a picture of a random cat!"),
	async execute(interaction){
	const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
    const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];
	
	const catResult = await request('https://aws.random.cat/meow');
	const { file } = await getJSONResponse(catResult.body);
	const embed = new EmbedBuilder()
	.setTitle('What a cute cat')
	.setColor(randomSideColor)
	.setImage(file)
	await interaction.reply({ embeds: [embed]});}
	
}