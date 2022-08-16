const {SlashCommandBuilder, EmbedBuilder, ComponentType, ActionRowBuilder, ButtonBuilder, ButtonStyle} = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
  .setName('testcommand')
  .setDescription('hi'),
  async execute(interaction){
    const embed = new EmbedBuilder()
    .setTitle('wassup')

    const embedTwo = new EmbedBuilder()
    .setTitle('hey')

    const row = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId('disabled')
        .setLabel('Previous Page')
        .setDisabled(true)
        .setStyle(ButtonStyle.Secondary),
      new ButtonBuilder()
        .setCustomId('page2')
        .setLabel('Next Page')
        .setStyle(ButtonStyle.Secondary)
    );
    
    const row2 = new ActionRowBuilder().setComponents(
      new ButtonBuilder()
        .setCustomId('page1')
        .setLabel('Previous Page')
        .setStyle(ButtonStyle.Secondary),
    );

    await interaction.reply({embeds: [embed], components: [row]})

    const filter = i => i.user.id === interaction.user.id;

    const collector = interaction.channel.createMessageComponentCollector({ componentType: ComponentType.Button, filter, });


    collector.on('collect', async i => {
      if(i.customId === 'disabled'){
        await i.deferUpdate()
        await i.update({
          content: 'Disabled'
        })
        
      }

      if (i.customId === 'page2') {
        //await i.deferUpdate();
        //await i.editReply({ 
        await i.update({
          content: '',
          embeds: [embedTwo], 
          components: [row2], 
          });
        
        }

        if (i.customId === 'page1') {
          //await i.deferUpdate();
          //await i.editReply({ 
          await i.update({
            content: '',
            embeds: [embed], 
            components: [row], 
            });
          
          }

    })
  }
}