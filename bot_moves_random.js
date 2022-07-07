const mineflayer = require('mineflayer')

const options = {
    host: 'localhost', // Change this to the ip you want.
    port: 55211, // Change this to the port you want.
    username: 'Piku',
  }
const bot = mineflayer.createBot(options)

var pi = 3.14159;
var actions = [ 'forward', 'back', 'left', 'right']

bot.on('spawn', () => setInterval( ()=> {
    var yaw = Math.random()*pi - (0.5*pi);
    var pitch = Math.random()*pi - (0.5*pi);
    bot.look(yaw,pitch,false);
    let action = actions[Math.floor(Math.random() * actions.length)];
    var random_boolean = Math.random() < 0.5;
    bot.setControlState(action,random_boolean);
},
1000))

bot.close()