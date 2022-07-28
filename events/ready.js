const { Users, CurrencyShop } = require('../dbObjects.js')
module.exports = {
    name: 'ready',
    once: 'true',
   async execute(client){
        //client.user.setPresence({activites: [{name: 'being cool'}], status: 'idle'})
        const storedBalances = await Users.findAll();
	    storedBalances.forEach(b => currency.set(b.user_id, b));
        
        console.log(`Logged in as ${client.user.tag}!`);
    }

}
