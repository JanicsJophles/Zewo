const Canvas = require("canvas")
const {AttachmentBuilder, Attachment} = require('discord.js')
const backgrounds = ["https://static.zerochan.net/Mugon.full.512988.jpg", "https://images7.alphacoders.com/341/341225.jpg", 'https://images3.alphacoders.com/165/thumb-1920-165265.jpg', 'https://www.wallpapers13.com/wp-content/uploads/2016/01/Autumn-forest-waterfall-nature-aiyumn-HD-background-2560x1600-1920x1440.jpg']
const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
const dim = {
    height: 600,
    width: 1200,
    margin: 50
}

const av = {
    size: 256,
    x: 480,
    y: 170
}

const generateImage = async (member) => {
    let username = member.user.username
    let discrim = member.user.discriminator
    let avatarURL = member.user.displayAvatarURL({extension: "png", dynamic: false, size: av.size})

    const canvas = Canvas.createCanvas(dim.width, dim.height)
    const ctx = canvas.getContext("2d")
    const backimg = await Canvas.loadImage(background)
    ctx.drawImage(backimg, 0, 0)

    ctx.fillStyle = "rgba(0,0,0,0,.8)"
    ctx.fillRect(dim.margin, dim.margin, dim.width - 2 * dim.margin, dim.height -2 * dim.margin)

    const avimg = await Canvas.loadImage(avatarURL)
    ctx.save()

    ctx.beginPath()
    ctx.arc(av.x + av.size / 2, av.y + av.size / 2, av.size / 2, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.clip()
    ctx.drawImage(avimg, av.x, av.y)
    ctx.restore()

    ctx.fillStyle = "white"
    ctx.textAlign = "center"
    ctx.strokeStyle = "black"

    ctx.font = "50px Sans"
    ctx.fillText("Welcome", dim.width/2, dim.margin + 70)

    ctx.font = "60px Sans"
    ctx.fillText(username + discrim, dim.width/2, dim.height - dim.margin - 75)
    ctx.strokeText(username + discrim, dim.width/2, dim.height - dim.margin - 75)
    ctx.font = "50px Sans"
    ctx.fillText("to the server", dim.width/2, dim.height - dim.margin - 20)

    const attachment = new AttachmentBuilder(canvas.toBuffer('image/png'), { name: "welcome.png" }) 
    return attachment

   
}

module.exports = generateImage
