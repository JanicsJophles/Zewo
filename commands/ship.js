const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js')
const Canvas = require('canvas')
module.exports = {
    data: new SlashCommandBuilder()
    .setName('ship')
    .setDescription('ships you with another user, outputting a percentage')
    .addUserOption(options => options.setName('target').setDescription('who do you want to be shipped with ;)').setRequired(true)),
    async execute(interaction){
        const memberOne = interaction.user
        const memberTwo = interaction.options.getUser('target')
        var  randomNumbers = [];
        for (var i = 1; i <= 100; i++) {
    randomNumbers.push(i);
        }
        
        const randomNumber = randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
        const randomResponses = ['working out', 'kissing', 'making love to each other', 'dating', 'getting married', 'being more than a friend']
        const randomResponse = randomResponses[Math.floor(Math.random() * randomResponses.length)];
        const randomSideColors = ["#0099ff","#FF0000","#FF7F00","#FFFF00","#00FF00","#8B00FF"]
        const randomSideColor = randomSideColors[Math.floor(Math.random() * randomSideColors.length)];

        //start of image gen

        const canvas = Canvas.createCanvas(700, 250)
        const ctx = canvas.getContext('2d')
        const bg = await Canvas.loadImage('https://wallpapercave.com/wp/wp5393374.jpg')
        ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)

        const avatar = await Canvas.loadImage(memberOne.displayAvatarURL({extension: 'png'}))
        ctx.drawImage(avatar, 100, 25, 200, 200)

        const TargetAv = await Canvas.loadImage(memberTwo.displayAvatarURL({extension: 'png'}))
        ctx.drawImage(TargetAv, 400, 25, 200, 200)

        const heart = await Canvas.loadImage('https://media.discordapp.net/attachments/891454767027601428/1005361272088449095/istockphoto-854564820-612x612.png?width=585&height=585')
        const heartBroken = await Canvas.loadImage('https://media.discordapp.net/attachments/891454767027601428/1005361678470357052/imgbin_emoji-broken-heart-smiley-emoticon-png.png?width=656&height=585')

        if(randomNumber >49){
            ctx.drawImage(heart, 275, 50, 150, 150)
            const attachment = new AttachmentBuilder(canvas.toBuffer('image/png'), { name: "ship.png" }) 
            const embed = new EmbedBuilder()
        .setTitle('Ship???')
        .setDescription(`${memberOne} and ${memberTwo} have a ${randomNumber}% chance of ${randomResponse}!!!!`)
        .setImage('attachment://ship.png')
        .setColor(randomSideColor)
        return interaction.reply({content: `${memberTwo}`, embeds: [embed], files: [attachment]})

        }  else{
            ctx.drawImage(heartBroken, 275, 50, 150, 150)
            const attachment = new AttachmentBuilder(canvas.toBuffer('image/png'), { name: "ship.png" }) 
            const embedTwo = new EmbedBuilder()
            .setTitle('Ship???')
            .setDescription(`${memberOne} and ${memberTwo} have a ${randomNumber}% chance of ${randomResponse}!!!!`)
            .setImage('attachment://ship.png')
            .setColor(randomSideColor)
            return interaction.reply({content: `${memberTwo}`, embeds: [embedTwo], files: [attachment]})
        }

        
        //end of image gen


        

       
    }
}