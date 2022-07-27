const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sheen')
		.setDescription("just sheen"),
		async execute(interaction) {
		await interaction.reply('wow sheen');
	},
};