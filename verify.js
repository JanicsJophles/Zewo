const { MessageActionRow, MessageButton, MessageEmbed, Modal } = require('discord.js'); 
const { SlashCommandBuilder } = require('@discordjs/builders')

const roleID = '994458947773800532'

const embed = {
    title: "Verify yourself",
    description: "Verifying yourself also admits that you are above the age of 13."
   }

module.exports = {
    data: new SlashCommandBuilder()
    .setName("verify")
    .setDescription("Please use this command to verify that you are not a bot!"),
    async execute(interaction){
      if(interaction.channel.id == '995967577253761075') {
        const row = new MessageActionRow()
        .addComponents(
         new MessageButton()
         .setCustomId('verify')
         .setLabel('Verify')
         .setStyle('SUCCESS')
         .setEmoji('✅')
        )
      }
      
       
        interaction.reply({
            embed: embed,
            components: row
          });

    }
}
