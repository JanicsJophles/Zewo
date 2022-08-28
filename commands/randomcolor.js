const {SlashCommandBuilder, Embed, EmbedBuilder} = require('discord.js')
var randomColor = require('random-color');
var color = randomColor();
const stupid = color[Math.floor(Math.random()*color.length)];
var colorString = color.hexString()


module.exports = {
    data: new SlashCommandBuilder()
    .setName('randomcolor')
    .setDescription('sends a random color'),
    async execute(interaction, client){
        
        const embed = new EmbedBuilder()
        .setTitle("RANDOM COLOR!!!")
        .setDescription(`Work in progress :(`)
        

        await interaction.reply({embeds: [embed]})
        console.log(stupid)
        
    }
}