const {SlashCommandBuilder, ActionRowBuilder, ButtonStyle, ButtonBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('getajob')
    .setDescription('for u, my discord kitten'),
    async execute(interaction){
        const link = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel('click this')
            .setURL('https://indeed.com/')
            .setStyle(ButtonStyle.Link)
        )
        const stuff = 'Why are you still on discord? Why are you on your couch right now talking to egirls and kittens? Get a life. Get a job. Click the button down below u stupid idiot.'
        await interaction.reply({content: stuff, components: [link]})
    }
    
}