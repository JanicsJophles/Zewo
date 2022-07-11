const Discord = require('discord.js')
const { SlashCommandBuilder } = require('@discordjs/builders')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('8ball')
    .setDescription('Literally just an 8ball')
    .addStringOption(option => option.setName('input').setDescription('what do you want to say?').setRequired(true)),
    async execute(interaction, client){
        let reply = ['Outlook good', 'Yes ofc', 'Nah', 'My sources say no', 'Ask again or try later dummy']
        let result = Math.floor(Math.random() * reply.length)
        let question = interaction.options.getString("input")

        const eightBallembed = {
            title: 'The 8ball',
            description: `The question was: **${question}**\n\n8ball answered: **${reply[result]}**`
        }

        await interaction.reply({embeds: [eightBallembed]})
    }
}