require("dotenv").config();
const { Client, Collection, Intents } = require('discord.js');
const generateImage = require('./genImage')

const fs = require('fs')
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, 'GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_INVITES'] });


const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

//Array
const commands = [];

//Commands
client.commands = new Collection();

//File
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
    client.commands.set(command.data.name, command);
}



client.once("ready", () =>{
    setInterval(() => {
        client.user.setActivity(`${client.guilds.cache.size} Servers`, { type: 'WATCHING' })
    }, 60000);
    console.log("BOT IS READY YASS");

    const CLIENT_ID = client.user.id;
    console.log(client.user.id)
    const rest = new REST({
        version: "9"
    }).setToken(process.env.TOKEN);

    client.on('interactionCreate', async interaction => {
        if (!interaction.isCommand()){
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            return;
        }
        
        const command = client.commands.get(interaction.commandName);
    
        if (!command) return;
    
        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    });

    // welcome command!!!!

const welcomeChannelId = "995455054813347952"
const welcomeRoleChannelID = "994458948335841283"


client.on("guildMemberAdd", async (member) => {
    console.log('awidoowahd')
const img = await generateImage(member)
const welcomeEmbed = {
    color: "BLURPLE",
    title: "Welcome To the Better Egirl Paradise Server",
    url: "https://top.gg/servers/994458947719282738/vote",
    thumbnail: {
        url: "https://www.icegif.com/wp-content/uploads/2022/01/icegif-547.gif"
    },
    image: {
        url: 'attachment://welcome.png'
    },
    //description: `Go get some roles at <#${welcomeRoleChannelID}> \n <@${member.id}> be my kitten!!`,
    footer: "Have fun in the server!"
}
     
member.guild.channels.cache.get(welcomeChannelId).send({embeds: [welcomeEmbed], files: [img] });
})

//end of welcome command!!!!

   
// rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands })
// .then(() => console.log('Successfully registered application commands.'))
// .catch(console.error);

})


client.login(process.env.TOKEN);