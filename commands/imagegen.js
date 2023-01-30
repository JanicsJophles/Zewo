const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
    .setName('imagegen')
    .setDescription('generates an image!')
    .addStringOption(option => option.setName('prompt').setDescription('give me a text prompt (a white cat)').setRequired(true))
    .addIntegerOption(option => option.setName('numberofimgs').setDescription('You can create up to 10 images.').setMinValue(1).setMaxValue(10).setRequired(true)),

    
    async execute(interaction){
        interaction.deferReply()
        const configuration = new Configuration({
            organization: process.env.organizationAI,
            apiKey: process.env.OPENAPI,
          });
          const openai = new OpenAIApi(configuration);

          const response = await openai.createImage({
            prompt: `${interaction.options.getString('prompt')}`,
            n: interaction.options.getInteger('numberofimgs'),
            size: "512x512"
            
          });   
          
          const image = response.data.data[0].url
          

          
          
          await interaction.editReply(`${image}`)

         
          
    }
}
