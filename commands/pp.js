const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('pp')
    .setDescription('how long yo pp is')
    .addUserOption(option => option.setName('target').setDescription('who r u going to slap').setRequired(false)),
    async execute(interaction){
    let mentionedMember = interaction.options.getUser('target')
    const your = 'Your'
    let apostrophe = "'s"
    let apostropheTrue = ''
    if(!mentionedMember){
        apostrophe = apostropheTrue
    }
    const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
    const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];
    const randomPps = ["8=D", "8==D", "8===D", "8====D", "8=====D", "8======D", "8=======D", "8========D", "8===========D"]
    const randomPp = randomPps[Math.floor(Math.random() * randomPps.length)];
    const embed = new EmbedBuilder()
    .setTitle('Pp size???')
    .setDescription(`${mentionedMember || your} ${apostrophe} pp looks like this:\n${randomPp}`)
    .setColor(randomSideColor)

    await interaction.reply({embeds: [embed]})
    }
    
    
}