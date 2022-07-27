module.exports = {
    name: 'ready',
    once: 'true',
    execute(client){
        setInterval(() => {
            client.user.setActivity(`you...`, { type: 'WATCHING' })
        }, 60000);
        console.log("BOT IS READY YASS");
    }

}
