const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('say')
		.setDescription("tell me what to say!")
        .addStringOption(option => option.setName('input').setDescription('what do you want me to say').setRequired(true)),
		async execute(interaction) {
        const say = interaction.options.getString('input')
		await interaction.reply(say);
	},
};