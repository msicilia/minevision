# Setup mineflayer

## About mineflayer

Project `mineflayer` [https://github.com/PrismarineJS/mineflayer](https://github.com/PrismarineJS/mineflayer) allows for the creation of Minecraft bots. 

The main API is JS, but it is usable via Python using a bridge [https://pypi.org/project/javascript/](https://pypi.org/project/javascript/)

## Idea

The idea is that of taking trained machine learning models and integrate them as part of `mineflayer` bots.

## Setup

We assume you have a Minecraft account so that you can enter a Minecraft server to interact and see the bot(s) in action. 

### Setting up a Minecraft server

Note that `mineflayer` supports Minecraft 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17 and 1.18.

You can set up your MC server by following [these instructions](MCServer.md). 

### Installing Node.js

You need to install Node.js > 14.0 from this site [https://nodejs.org/en/](https://nodejs.org/en/)

We recommend using the current LTS version.

Check that it is correctly instaled with this command.

```
node --version
```

### First test

The first test is just spawning a bot in your server. 

First, create a folder an initialize a node project with the following command.

```
npm init 
```

Then install `mineflayer` with this command:

```
npm install mineflayer
```

This installs locally to your project (so that if you create another one in other folder you would need to install again). Alternatively, you can install globally.
```
npm install -g mineflayer
```

Then create a `index.js` file with the following content. 
```javascript 
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
```
You can use the options if your server is located at other port. If it is in the default, you can omit the `options` in the call to `createBot`.

Then, you have to run your bot using Node with the following command.

```
node index.js
```

You have to check that your bot is in the server with you, and have said hi via the chat. 

The console stays and displays the message sent with `console.log`. When you want to stop your bot, just press Ctrl+C in that console. 