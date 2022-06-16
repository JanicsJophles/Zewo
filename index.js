// wassup guys
const { Client, Intents } = require('discord.js');
require("dotenv").config()
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const mongoose = require('mongoose')

client.on('ready!!!', async () => {
    await mongoose.connect(process.env.MONGO_URI,
        {
            keepAlive: true
        })
}),
    

    client.login(process.env.DISCORD_TOKEN);
