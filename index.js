const { Client, GatewayIntentBits, Partials, Collection, EmbedBuilder } = require('discord.js');
const fs = require('node:fs')
const path = require('path')
const generateImage = require('./genImage.js')

const prefix = '--'
require('dotenv').config()

const client = new Client
({ intents: [
    GatewayIntentBits.Guilds,
    'MessageContent',
    'DirectMessageReactions',
    'DirectMessages',
    'GuildInvites',
    'GuildMembers',
    'GuildMessageReactions'
    
]});

//start of command handler for global

client.commands = new Collection()
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}




//end of command handler for global



//start of command handler for guild


const ownerCommandsPath = path.join(__dirname, 'ownerCommands');
const ownerCommandFiles = fs.readdirSync(ownerCommandsPath).filter(file => file.endsWith('.js'));

for (const ownerFile of ownerCommandFiles) {
	const ownerFilePath = path.join(ownerCommandsPath, ownerFile);
	const ownerCommand = require(ownerFilePath);
	client.commands.set(ownerCommand.data.name, ownerCommand);
}
//end of command handler for guild




//start of event handler

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
    }
}


//end of event handler

client.on('interactionCreate', async interaction => {
	if (interaction.isChatInputCommand()){
        const command = client.commands.get(interaction.commandName);

        if (!command) return;
    
        try {
            await command.execute(interaction, client);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
    
    else if (interaction.isSelectMenu()){
    if (interaction.customId === 'help_menu'){
        if(interaction.values[0] === 'text'){
            const textCommands = new EmbedBuilder()
            .setTitle('Text Commands :D')
            .setDescription('`sheen` - sends a message called Sheen\n`bitches`- gives you bitches ranging from 0-100')
            .setColor("Random")
            .setThumbnail('https://gifimage.net/wp-content/uploads/2017/10/hestia-anime-gif-5.gif')
            .setTimestamp()
            .setFooter({text: `Next page is about Image Commands!`})
    
          interaction.update({embeds: [textCommands]})
        }
        else if (interaction.values[0] === "image") {

  
            const imageCmds = new EmbedBuilder()
            .setTitle('Image Commands :D')
            .setDescription("`8ball` - an 8ball lol\n`randomcat` - sends a pic of a random cat :3\n`define` - defines something from urban dictionary\n`hotdog` - sends a pic of a random hotdog\n`come` - uhh\n`poll` - a poll command\n`coinflip` - quite literally a coinflip command\n")
            .setColor("Random")
            .setThumbnail('https://gifimage.net/wp-content/uploads/2017/10/hestia-anime-gif-5.gif')
            .setTimestamp()
            .setFooter({text: `Next page is about Rating Commands!`})
  
          await interaction.update({ embeds: [imageCmds] });
        }   else if (interaction.values[0] === "rate") {

            
  
            const ratingCmds = new EmbedBuilder()
            .setTitle('Rating Commands :D')
            .setDescription("`gayrate` - tells you how gay you are\n`funnyrate` - tells you how funny you are\n`pp` - shows pp size omg\n`clownrate` - tells u how much of a clown you are\n`waifurate` - how much of a waifu are you?!\n")
            .setColor('Random')
            .setThumbnail('https://gifimage.net/wp-content/uploads/2017/10/hestia-anime-gif-5.gif')
            .setTimestamp()
            .setFooter({text: `Next page is about Interactive Commands!`})
    
              await interaction.update({ embeds: [ratingCmds]})
  
              } else if (interaction.values[0] === "interactive") {
  
                
   
                const interactiveEmbed = new EmbedBuilder()
                .setTitle('Interactive Commands :D')
                .setDescription("`slap` - slaps a user\n`kiss` - kisses a user\n`ship` - ships 2 users ;)\n`hug` - hugs a user\n`meme` - sends memes from reddit\n`reddits` - choose a reddit to get a post\n `food` - sends food from r/foodp*rn\n")
                .setColor('Random')
                .setThumbnail('https://gifimage.net/wp-content/uploads/2017/10/hestia-anime-gif-5.gif')
                .setTimestamp()
                .setFooter({text: `Last page is about Info Commands!`})
        
           await interaction.update({ embeds: [interactiveEmbed] })
  
          } else if (interaction.values[0] === "info") {

  
            const infoCommands = new EmbedBuilder()
            .setTitle('Info Commands :D')
            .setDescription("`serverinfo` - shows server info\n`avatar` - displays a users avatar\n`memberinfo` - shows guild members info")
            .setColor("Random")
            .setThumbnail('https://gifimage.net/wp-content/uploads/2017/10/hestia-anime-gif-5.gif')
            .setTimestamp()
            .setFooter({text: `Go back to see the other commands :3`})
    
  
          await interaction.update({ embeds: [infoCommands] })
  
          } 
        
    }
        
    }

    
   
});


const welcomeChannelId = "994458948335841287"
const welcomeRoleChannelID = "994458948335841283"
const rulesChannel = "994458948335841282"
const generalChannel = '994458948335841287'
const guildId = "994458947719282738"

client.on("guildMemberAdd", async (member, client) => {
    
    

    if(member.guild.id === '994458947719282738'){
        console.log(`${member} joined the Egirl Paradise! the embed was sent :D`)
        console.log(member.guild.id)
        const img = await generateImage(member)
        const welcomeEmbed = {
            color: 0x0099ff,
            title: "Welcome To the Better Egirl Paradise Server",
            url: "https://top.gg/servers/994458947719282738/vote",
            thumbnail: {
                url: "https://www.icegif.com/wp-content/uploads/2022/01/icegif-547.gif"
            },
            image: {
                url: 'attachment://welcome.png'
            },
            description: `დ Go get some roles at <#${welcomeRoleChannelID}> ∯\nდ Read the rules at <#${rulesChannel}> ∯\nდAnd get a kitten in <#${generalChannel}> ∯`,
            footer: {
                text: "Have fun in the server!",
                icon_url: "https://i.gifer.com/RhbX.gif"
        
            }
        }
             
        member.guild.channels.cache.get(welcomeChannelId).send({content: `Wassup <@${member.id}>`, embeds: [welcomeEmbed], files: [img]});}






})



client.login(process.env.TOKEN);