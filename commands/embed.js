const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('embedcreate')
    .setDescription('creates an embed with title, desc, color, and image.')
    .addStringOption(option => option.setName('title').setDescription('Add a title!').setRequired(false))
    .addStringOption(option => option.setName('description').setDescription('Add a description!').setRequired(false))
    .addStringOption(option => option.setName('color').setDescription('Add a color! (use hex only. example: #ffd700)').setRequired(false))
    .addStringOption(option => option.setName('image').setDescription('Add an image! (use URLS only)').setRequired(false)),

    async execute(interaction){
        const embed = new EmbedBuilder()
        .setTitle(interaction.options.getString('title'))
        .setDescription(interaction.options.getString('description'))
        .setColor(interaction.options.getString('color'))
        .setImage(interaction.options.getString('image'))
        await interaction.reply({embeds: [embed]})
    }
}