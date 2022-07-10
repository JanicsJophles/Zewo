const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sling')
		.setDescription('Replies with slong!'),
	async execute(interaction) {
		await interaction.reply('slong!');
	},
};