// if (interaction.customId === "help_menu") {
//     if (!interaction.isSelectMenu()) return;
      

//       if (interaction.values[0] === "text") {

//         await interaction.deferUpdate();

//         const textCommands = new EmbedBuilder()
//         .setTitle('Text Commands :D')
//         .setDescription('`sheen` - sends a message called Sheen\n`bitches`- gives you bitches ranging from 0-100')
//         .setColor(randomSideColor)
//         .setThumbnail('https://gifimage.net/wp-content/uploads/2017/10/hestia-anime-gif-5.gif')
//         .setTimestamp()
//         .setFooter({text: `Next page is about Image Commands!`})


//     await msg.edit({ embeds: [textCommands] });

//       } else if (interaction.values[0] === "image") {

//         await interaction.deferUpdate();

//         const imageCmds = new EmbedBuilder()
//         .setTitle('Image Commands :D')
//         .setDescription("`8ball` - an 8ball lol\n`randomcat` - sends a pic of a random cat :3\n`define` - defines something from urban dictionary\n`hotdog` - sends a pic of a random hotdog\n`come` - uhh\n`poll` - a poll command\n`coinflip` - quite literally a coinflip command\n")
//         .setColor(randomSideColor)
//         .setThumbnail('https://gifimage.net/wp-content/uploads/2017/10/hestia-anime-gif-5.gif')
//         .setTimestamp()
//         .setFooter({text: `Next page is about Rating Commands!`})

//       await msg.edit({ embeds: [imageCmds] });

//       } else if (interaction.values[0] === "rate") {

//         await interaction.deferUpdate();

//         const ratingCmds = new EmbedBuilder()
//         .setTitle('Rating Commands :D')
//         .setDescription("`gayrate` - tells you how gay you are\n`funnyrate` - tells you how funny you are\n`pp` - shows pp size omg\n`clownrate` - tells u how much of a clown you are\n`waifurate` - how much of a waifu are you?!\n")
//         .setColor(randomSideColor)
//         .setThumbnail('https://gifimage.net/wp-content/uploads/2017/10/hestia-anime-gif-5.gif')
//         .setTimestamp()
//         .setFooter({text: `Next page is about Interactive Commands!`})

//           await msg.edit({ embeds: [ratingCmds]})

//           } else if (interaction.values[0] === "interactive") {

//             await interaction.deferUpdate();

//             const interactiveEmbed = new EmbedBuilder()
//             .setTitle('Text Commands :D')
//             .setDescription("`slap` - slaps a user\n`kiss` - kisses a user\n`ship` - ships 2 users ;)\n`hug` - hugs a user\n`meme` - sends memes from reddit\n`reddits` - choose a reddit to get a post\n `food` - sends food from r/foodp*rn\n")
//             .setColor(randomSideColor)
//             .setThumbnail('https://gifimage.net/wp-content/uploads/2017/10/hestia-anime-gif-5.gif')
//             .setTimestamp()
//             .setFooter({text: `Last page is about Info Commands!`})
    
//        await msg.edit({ embeds: [interactiveEmbed] })

//       } else if (interaction.values[0] === "info") {

//         await interaction.deferUpdate();

//         const infoCommands = new EmbedBuilder()
//         .setTitle('Text Commands :D')
//         .setDescription("`serverinfo` - shows server info\n`avatar` - displays a users avatar\n`memberinfo` - shows guild members info")
//         .setColor(randomSideColor)
//         .setThumbnail('https://gifimage.net/wp-content/uploads/2017/10/hestia-anime-gif-5.gif')
//         .setTimestamp()
//         .setFooter({text: `Go back to see the other commands :3`})


//       await msg.edit({ embeds: [infoCommands] })

//       } 
//   }