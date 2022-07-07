const mineflayer = require('mineflayer')

const options = {
  host: 'localhost', // Change this to the ip you want.
  port: 25565 // Change this to the port you want.
}

const bot = mineflayer.createBot(options)


console.log("Just logged in!")

const welcome = () => {
    bot.chat('hi!')
  }
  
bot.once('spawn', welcome)