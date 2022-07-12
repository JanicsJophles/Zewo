const { MessageActionRow, MessageButton, MessageEmbed, MessageAttachment, InteractionCollector } = require('discord.js'); 
const { SlashCommandBuilder } = require('@discordjs/builders')

const data = {
    name: "verify",
    description: "Verify via CAPTCHA verification",
        
}
module.exports = {
    data: data,
    run: async(interaction) => {
        if(interaction.channel.id === "995967577253761075") {  
        const row = new MessageActionRow()
        .addComponents(
            new MessageButton()
            .setCustomId('verify')
            .setLabel('Click me to verify')
            .setStyle('SUCCESS')
        )
        
        
    //embed goes here
            const embed = new MessageEmbed()
            .setColor("DARK_GOLD")
            .setTitle('To verify yourself, please click the button!!')
            .description("By clicking the button you agree to be DMd by the bot.")
            interaction.reply({embeds: [embed], components: [row]})
            
 
 
    //filter settings go here
    let filter = i => i.customId === 'verify' && i.user.id === interaction.user.id;

    const collector = interaction.channel.createMessageComponentCollector({ filter });
    setTimeout(() => {
        collector.stop()
    }, 300000)
    
    
    collector.on('collect', async i => {
        if (i.customId === 'verify') {
            interaction.deleteReply()
            const person = interaction.guild.members.cache.get(i.user.id)
           try {
            const path = require('path')
            function makeid(length) {
                var result           = '';
                var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz23456789-!_';
                var charactersLength = characters.length;
                for ( var i = 0; i < length; i++ ) {
                  result += characters.charAt(Math.floor(Math.random() * 
             charactersLength));
               }
               return result;
            } 
                        const { createCanvas, registerFont, loadImage } = require('canvas')
                        registerFont('joe.ttf', { family: "Comic Sans"})
                        const canvas = createCanvas(1920, 1080)
                        const ctx = canvas.getContext('2d')
                const background = await loadImage(
                    path.join(__dirname, '../hude.png')
                )
                let x = 0
                let y = 0
             ctx.drawImage(background, x, y)
                ctx.font = '200px Comic Sans'
                ctx.rotate(0.0)
               let joe = makeid(7)
                var text = ctx.measureText(joe)
                x = canvas.width / 2 - text.width /2
                y = canvas.height / 2 - text.height /2
                ctx.fillText(joe, x, background.height / 2)
                let num = 5
                while(num > 0) {
                let max = 1080
                let min = 0
                const a = Math.floor(Math.random() * (max - min + 1)) + min;
                max = 1080
                min = 0
                const a2 = Math.floor(Math.random() * (max - min + 1)) + min;
                ctx.strokeStyle = '#000000'
                ctx.beginPath()
                ctx.lineWidth = 15
                ctx.lineTo(0, a)
                ctx.lineTo(1920, a2)
                ctx.stroke()
                num -= 1
                }

                const attach = new MessageAttachment(canvas.toBuffer(), "mommy.png")
                const embed = {
                    title: ('Please complete the CAPTCHA!!'),
                    image: ('attachment://mommy.png')
                }
                
                const sent = await person.send({ embeds: [embed], files: [attach]})
                const answer = joe
            const filtere = i => i.id === interaction.user.id
            const messageCollector = sent.channel.createMessageComponentCollector({filtere, time: 20000})
            messageCollector.on('collect', async m => {
                try{
                    if(m.content === answer) {
                        messageCollector.stop()
                        const verifiedRole = interaction.guild.roles.cache.find(r => r.name === 'cum nugget monkey balls')
                        person.roles.add(verifiedRole)
                        m.reply('Correct! You are now verified')
                    } else {
                        const fs = require('fs')
                        let triesJSON = JSON.parse(fs.readFileSync)
                        if(!triesJSON[interaction.user.id]) {
                            triesJSON[interaction.user.id] = {
                                tries: 3
                            }
                            fs.writeFileSync('./verifyTries.json', JSON.stringify(triesJSON))
                        }
                        if(triesJSON[interaction.user.id].tries == 0) {
                            messageCollector.stop()
                            await m.reply(`This is the third CAPTCHA you have failed in a row. You are going to be banned now`)
                            if(person.bannable) {
                                person.ban({days: 7, reason: "Failed CAPTCHA 3 times in a row"})
                            }

                            triesJSON[interaction.user.id] = {
                                tries:3
                            }

                            fs.writeFileSync('./verifyTries.json', JSON.stringify(triesJSON))
                            return
                        } else {
                            messageCollector.stop()
                            triesJSON[interaction.user.id].tries -= 1;
                            fs.writeFileSync('./verifyTries.json', JSON.stringify(triesJSON))

                                await m.reply(`incorrect. youll be kicked now! You will be given ${triesJSON[interaction.user.id].tries} more tries until you are banned`)
                                if(person.kickable) {
                                    await person.kick({reason: "FAILED CAPTCHA!"})
                                }
                                return
                        }
                    }

        }catch(err) {
            
        }
            })
        
            messageCollector.on('end', collected => {
               if(collected.size == 0) {
                sent.channel.send("You did not send an answer. Run the cmd again to verify.")
               }
            })
        }catch(err) {
            interaction.followUp({content: `<@${i.user.id}>, your dms are off. Turn em on so you can do the verification! After that you can turn it off.`, ephemeral: true})
            console.log(err)
        }
           collector.stop()
        }
    });
    collector.on('end', collected => {
        if(collected.size == 0) {
            interaction.followUp({content: `<@${interaction.user.id}>, its been 5 mins w/o a response. Please run the cmd again to verify.`, ephemeral: true})
        }
    return;
    })
        } else {
          interaction.reply({content: `You can only use this cmd in the <$995967577253761075> channel!`, ephemeral: true})
        }
    }
    
}