const { Client, GatewayIntentBits, Partials, Collection, EmbedBuilder, Events } = require('discord.js');
const fs = require('node:fs')
const path = require('path')
const generateImage = require('./genImage.js')
const MongoClient = require('mongodb').MongoClient;

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


// const uri = "mongodb+srv://krishanator:<tGWYopq6Yt6UWJGT>@zewo.vkdy7.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//     const collection = client.db("test").collection("discord_users");
//   // perform actions on the collection object
//   client.close();
// });


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