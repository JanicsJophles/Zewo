const { SlashCommandBuilder } = require('discord.js');
const fadictionary = require('../fancyText.json')
const {letterTrans} = require('custom-translate')
module.exports = {
	data: new SlashCommandBuilder()
		.setName('fancyfont')
		.setDescription("what")
        .addStringOption(option => option.setName('input').setDescription('what do you want me to say').setRequired(true)),
		async execute(interaction) {
            
        const say = interaction.options.getString('input')
       // const poopy = letterTrans(say, fadictionary, " ")
		await interaction.reply('work in progress!');
        console.log(say)
	},
};