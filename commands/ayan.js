const {SlashCommandBuilder} = require("@discordjs/builders")
const wait = require('node:timers/promises').setTimeout;

module.exports ={
    data: new SlashCommandBuilder()
    .setName("bitches")
    .setDescription("Getting ayan bitches"),
    
    async execute(interaction){
        let reply = [3, 4, 10, 10000, 30]
        let result = Math.floor(Math.random() * reply.length)
        await interaction.reply("Getting Bitches... 1%");
        await wait(2000);
		await interaction.editReply('Getting Bitches... 10%');
        await wait(2000);
        await interaction.editReply('Getting Bitches... 30%');
        await wait(2000);
        await interaction.editReply('Getting Bitches... 50%');
        await wait(2000);
        await interaction.editReply('Getting Bitches... 69%');
        await wait(2000);
        await interaction.editReply('Getting Bitches... 90%');
        await wait(2000);
        await interaction.editReply('Getting Bitches... 100%!');
        await wait(2000);
        await interaction.followUp(`You've got ${reply[result]} bitches.`)
        
    }
    
}