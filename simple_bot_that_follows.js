
/* 
This bot is an implementation of basic mineflayer functions such as event listeners and movement controls
It is needed making the bot a server operator and adding "/gamerule sendCommandFeedback false" on your server
*/

const mineflayer = require('mineflayer')
const mineflayerViewer = require('prismarine-viewer').mineflayer
const Entity = require("prismarine-entity")('1.8.9')


if (process.argv.length < 3 || process.argv.length > 6) {
  console.log('Usage : node simple_bot.js <host> <port> <name>')
  process.exit(1)
}

const bot = mineflayer.createBot({
  host: process.argv[2],
  port: parseInt(process.argv[3]),
  username: process.argv[4] ? process.argv[4] : 'simple_bot',
})


bot.once('spawn', () => {
  mineflayerViewer(bot, { port: 3007, firstPerson: true })
})


var total_apples = 0
var total_tps = 0
var followed_player_name = ""
var followed_last_message = "" //last message sent by the followed player


bot.addListener('chat', (username, message) => {
  console.log('user: ' + username)

  if(followed_player_name == username){
    followed_last_message = message
  }

  if(username != bot.username &&  message == 'apple'){  //say "apple" to get an apple
    bot.chat('/give ' + username + ' apple 1')
    total_apples++;
    console.log('\nGiven ' + total_apples + ' apple(s)')
  }

  if(username != bot.username &&  message == 'teleport me'){  //say "teleport me" to get teleported to the bots localation
    bot.chat('/teleport ' + username + ' ' + bot.username)
    total_tps++;
    console.log('\n' + total_tps + ' players had been teleported')
  }
  
  if(username != bot.username && message == 'follow me'){  //say "follow me" to make the bot follow you
    followed_player_name = username
    followed_last_message = message
    console.log('Following ' + followed_player_name)
  }

  if(username != bot.username && message == 'stop'){ //say "stop" to make the bot stop following you
    console.log('Stopped following ' + followed_player_name)
    followed_player_name = ""
  }

})

bot.addListener('entityMoved', (entity) =>{ //an 'entityMoved' listener is added to let the bot know the player position
  if(followed_last_message == 'stop'){
    bot.setControlState('forward', false)
    return
    //may be better to use bot.removeListener() ???
  }else if(entity.username == followed_player_name){
    bot.lookAt(entity.position)
    bot.setControlState('forward', true)
  }
})