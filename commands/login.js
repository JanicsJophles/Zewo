const {SlashCommandBuilder} = require('discord.js')
const qs = require("qs");
const fetch = require('node-fetch')
const mongoose = require("mongoose");



module.exports = {
    data: new SlashCommandBuilder()
    .setName('login')
    .setDescription('login to last.fm')
    .addStringOption(option => option.setName('username').setDescription('type in your username').setRequired(true)),
    async execute(interaction, client){
        const lastfmUser = interaction.options.getString('username');
        const redirectUri = `http://localhost:3000/lastfm/callback?user=${lastfmUser}`;
        const authUrl = `http://www.last.fm/api/auth/?api_key=${process.env.LastFMkey}&cb=${redirectUri}`;

  await interaction.reply(`Please follow this link to authenticate with Last.fm: ${authUrl}`);

    }
}