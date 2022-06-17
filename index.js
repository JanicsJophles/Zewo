// wassup guys
const fs = require('node:fs');
const path = require('node:path');
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9")
const { Client, Intents, Collection } = require('discord.js');
require("dotenv").config()
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const mongoose = require('mongoose');
const { readdirSync } = require('node:fs');
//command handler below



//doing this later :D



//end of cmd handler

//start of mongoose


client.on('ready', async () => {
       console.log("woot woot its up!")
}),
    





    client.login(process.env.DISCORD_TOKEN)
    //.then(() => mongoose.connect(process.env.MONGO_URI));
