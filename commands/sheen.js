const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sheen')
		.setDescription("just sheen"),
		async execute(interaction) {
		await interaction.reply('wow sheen');
	},
};